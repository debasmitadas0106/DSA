function findMax(arr) {
  if (arr.length === 0) return null;
  let num = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > num) num = arr[i];
  }
  return num;
}

arr = [1, 2, 12, 23, 44,32];
console.log(findMax(arr));


const getUserDataAggregationService = async (
  condition,
  session_id,
  dbUrl = "Vodex"
) => {
  const logger = new Logger(
    `${ENTERING} ${SERVICE_METHOD}`,
    `${METHODS.CAMPAIGN_RUN.GET_CAMPAIGN_RUN_DETAILS_AGGREGATION} || ${session_id}`
  );

  logger.debug(`|| condition | ${JSON.stringify(condition)} || db | ${dbUrl}`);

  // Connect to the main user database
  const userConn = await dbConnect(dbUrl);

  try {
    const User = userConn.model("Users", UserSchema, "Users");
    const userData = await User.aggregate(condition);

    const balanceDataPromises = userData.map(async (user) => {
      const accountUrl = user.account_details[0]?.accountUrl[0]; // Use optional chaining
      if (accountUrl) {
        const balanceConn = await dbConnect(accountUrl);

        const BalanceHistory = balanceConn.model(
          TABLE.BALANCE_HISTORY,
          accountBalanceHistorySchema,
          TABLE.BALANCE_HISTORY
        );

        const startYear = new Date().getFullYear() - 1;
        const startDate = new Date(startYear, 9, 1); // October 1st last year
        const endDate = new Date(new Date().getFullYear(), 8, 30); // September 30th this year

        // Aggregating spent data
        const spentData = await BalanceHistory.aggregate([
          {
            $match: {
              type: "spent",
              createdAt: { $gte: startDate, $lte: endDate },
            },
          },
          {
            $group: {
              _id: {
                month: { $month: "$createdAt" },
                year: { $year: "$createdAt" },
              },
              totalSpent: { $sum: "$campaignRunCost" },
            },
          },
          {
            $sort: { "_id.year": 1, "_id.month": 1 },
          },
        ]);

        // Aggregating recharge data
        const rechargeData = await BalanceHistory.aggregate([
          {
            $match: {
              type: "recharge",
              createdAt: { $gte: startDate, $lte: endDate },
            },
          },
          {
            $group: {
              _id: {
                month: { $month: "$createdAt" },
                year: { $year: "$createdAt" },
              },
              totalRecharge: { $sum: "$rechargedBalance" },
            },
          },
          {
            $sort: { "_id.year": 1, "_id.month": 1 },
          },
        ]);

        const maintainedBalance = await BalanceHistory.aggregate([
          {
            $match: {
              createdAt: { $gte: startDate, $lte: endDate },
            },
          },
          {
            $sort: { createdAt: 1 }, // Sort by createdAt to get the last entry correctly
          },
          {
            $group: {
              _id: {
                month: { $month: "$createdAt" },
                year: { $year: "$createdAt" },
              },
              lastData: { $last: "$$ROOT" }, // Get the last document for each month
            },
          },
          {
            $project: {
              month: "$_id.month",
              year: "$_id.year",
              maintainedBal: {
                $cond: [
                  { $eq: ["$lastData.type", "spent"] },
                  {
                    $subtract: [
                      {
                        $add: [
                          "$lastData.prevAccountBalance",
                          "$lastData.onHoldBalance", // Add onHoldBalance first
                        ],
                      },
                      "$lastData.campaignRunCost", // Then subtract campaignRunCost
                    ],
                  },
                  {
                    $add: [
                      "$lastData.prevAccountBalance",
                      "$lastData.rechargedBalance",
                    ], // If type is recharge, add both fields
                  },
                ],
              },
            },
          },
        ]);

        // Now, maintainedBalance contains the month, year, and the calculated maintained balance for each month

        const monthNames = [
          "October",
          "November",
          "December",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
        ];

        const monthsInRange = Array.from({ length: 12 }, (_, index) => ({
          month: monthNames[index],
          year: startYear + (index < 3 ? 0 : 1), // Year changes after December
          totalSpent: 0,
          totalRecharge: 0,
          maintainedBal: 0, // Initialize maintained balance for each month
        }));

        // Adding totalSpent to the respective months
        spentData.forEach((data) => {
          const monthIndex =
            data._id.month - 10 < 0 ? data._id.month + 2 : data._id.month - 10;
          monthsInRange[monthIndex].totalSpent = data.totalSpent;
        });

        // Adding totalRecharge to the respective months
        rechargeData.forEach((data) => {
          const monthIndex =
            data._id.month - 10 < 0 ? data._id.month + 2 : data._id.month - 10;
          monthsInRange[monthIndex].totalRecharge = data.totalRecharge;
        });

        // Adding maintainedBal to the respective months
        maintainedBalance.forEach((data) => {
          const monthIndex =
            data._id.month - 10 < 0 ? data._id.month + 2 : data._id.month - 10;
          monthsInRange[monthIndex].maintainedBal = data.maintainedBal; // Fill the maintained balance if available
        });

        // Loop through monthsInRange to fill in missing maintainedBal with the last known value
        monthsInRange.forEach((month) => {
          if (month.maintainedBal === 0) {
            // If no maintainedBal for the month
            month.maintainedBal = lastMaintainedBal; // Use the last known value
          } else {
            lastMaintainedBal = month.maintainedBal; // Update last maintained balance
          }
        });

        return { ...user, monthlyData: monthsInRange };
      }
    });
    //return false
    const allUserDataWithSpentAndRecharge = await Promise.all(
      balanceDataPromises
    );

    // Filter out null results
    const filteredUserData = allUserDataWithSpentAndRecharge.filter(
      (user) => user !== null
    );

    filteredUserData.forEach((user) => {
      user.createdAt = moment(user.createdAt)
        .tz("Asia/Kolkata")
        .format("DD MMMM, YYYY");
    });

    // Prepare data for Excel with maintainedBal fetched from the next month's prevAccountBalance
    const excelData = filteredUserData.map((user) => {
      const monthlyData = user.monthlyData;

      // Process each month and use the next available month's prevAccountBalance
      const monthlyTotals = monthlyData.map((month, index) => {
        let maintainedBal = month.prevAccountBalance || 0; // Default to current month's prevAccountBalance

        // Check for the next available month with a prevAccountBalance
        for (
          let nextIndex = index + 1;
          nextIndex < monthlyData.length;
          nextIndex++
        ) {
          const nextMonth = monthlyData[nextIndex];
          if (nextMonth.prevAccountBalance) {
            maintainedBal = nextMonth.prevAccountBalance; // Assign from the next month
            break; // Exit loop once the first available month is found
          }
        }

        // If no valid next month was found, look for January's data
        if (maintainedBal === 0 && index + 1 < monthlyData.length) {
          // Check for a later month with data
          for (
            let futureIndex = monthlyData.length - 1;
            futureIndex >= 0;
            futureIndex--
          ) {
            if (
              futureIndex > index &&
              monthlyData[futureIndex].prevAccountBalance
            ) {
              maintainedBal = monthlyData[futureIndex].prevAccountBalance; // Use first available from the future
              break;
            }
          }
        }

        return {
          month: month.month,
          totalSpent: month.totalSpent,
          totalRecharge: month.totalRecharge,
          maintainedBal: maintainedBal,
        };
      });

      // Convert the monthly data into the required Excel format
      const monthlyTotalsForExcel = monthlyTotals.reduce((acc, month) => {
        acc[`totalSpent_${month.month}`] = month.totalSpent;
        acc[`totalRecharge_${month.month}`] = month.totalRecharge;
        acc[`maintainedBal_${month.month}`] = month.maintainedBal || 0; // Include maintained balance, default to 0 if not available
        return acc;
      }, {});

      // Return the final data for each user including the monthly totals
      return {
        userEmail: user.email, // Adjust according to your user schema
        accountUrl: user.account_details[0]?.accountUrl[0], // Account URL if available
        createdAt: user.createdAt,
        currency: user.account_details[0]?.currency[0] || "",
        ...monthlyTotalsForExcel, // Spread total amounts for all months into the object
      };
    });

    // Create a new workbook and a new worksheet
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(excelData);

    // Add the worksheet to the workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, "User Data");

    // Define file path and name
    const filePath = `./user_data_${session_id}.xlsx`; // Save file with session_id for uniqueness
    xlsx.writeFile(workbook, filePath);

    logger.debug(`Excel file created at: ${filePath}`);

    return { excelFilePath: filePath };
  } catch (error) {
    logger.error(`| Error | ${errorFormat(error)}`);

    const { status, stage, ...body } = error;

    const errorResponse = {
      ...body,
      status: status ? status : STATUS.BAD_REQUEST,
      error: error,
      err_stage:
        ERR_MESSAGE.CALL_SETTING
          .ERROR_IN_SERVICE_LOGIC_CREATEOR_UPDATE_CALL_SETTING,
    };
    return Promise.reject(errorResponse);
  } finally {
    await startConnectionTimeout(dbUrl);
  }
};