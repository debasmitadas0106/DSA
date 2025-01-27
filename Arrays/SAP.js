// const axios = require("axios");
// const sap = async (crmDetails, callDetails) => {
//   //const { questions, mobileNo, mandatory_params } = callDetails;
//   let leadId = "f22c2956-6c14-11ee-bb67-29cbdc6c95ef";
//   const options = {
//     method: "GET",
//     url: `https://my1000173.us1.test.crm.cloud.sap/sap/c4c/api/v1/lead-service/leads/${leadId}`,
//     headers: {
//       Authorization: `Basic ${Buffer.from(
//         "API_INTEGRATION:Welcome123456789@"
//       ).toString("base64")}`,
//       Version: "2021-07-28",
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   };
//   try {
//     const response = await axios.request(options);
//     //let etag = response.headers.etag;
//     return response.data.value.notes[0].content
//     // const data = {
//     //   status: "3",
//     //   reasonForStatus: "5",
//     //   notes: [
//     //     {
//     //       content: "This is a sample note",
//     //     },
//     //   ],
//     // };
//     // const options1 = {
//     //   method: "PATCH",
//     //   url: `https://my1000173.us1.test.crm.cloud.sap/sap/c4c/api/v1/lead-service/leads/${leadId}`,
//     //   headers: {
//     //     Authorization: `Basic ${Buffer.from(
//     //       "API_INTEGRATION:Welcome123456789@"
//     //     ).toString("base64")}`,
//     //     Version: "2021-07-28",
//     //     "Content-Type": "application/json",
//     //     Accept: "application/json",
//     //     "If-Match": etag,
//     //   },
//     //   data: data,
//     // };
//     // const updateResponse = await axios.request(options1);
//     // return { resp: updateResponse.data };
//   } catch (error) {
//     console.error(error);
//   }
// };

// sap().then((result) => {
//   console.log(result);
// });

const axios = require("axios");
const { wrapper } = require("axios-cookiejar-support");
const { CookieJar } = require("tough-cookie");

const sap = async () => {
  let leadId = "00163E05AE661ED389F31EB9C59FD49C";
  const jar = new CookieJar(); // To store cookies
  const client = wrapper(axios.create({ jar })); // Axios instance with cookie support

  try {
    // Step 1: GET Request to Fetch CSRF Token
    const getOptions = {
      method: "GET",
      url: `https://my306332.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/LeadCollection('${leadId}')`,
      headers: {
        Authorization: `Basic ${Buffer.from(
          "API_INTEGRATION:Welcome123456789@"
        ).toString("base64")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-csrf-token": "fetch",
        Connection: "keep-alive",
      },
    };

    const getResponse = await client.request(getOptions);
    const csrfToken = getResponse.headers["x-csrf-token"]; // Extract CSRF token
    console.log("CSRF Token:", csrfToken);

    // Step 2: PATCH Request with CSRF Token and Cookies
    const data = {
      UserStatusCode: "04",
      ResultReasonCode: "005",
    };

    const patchOptions = {
      method: "PATCH",
      url: `https://my306332.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/LeadCollection('${leadId}')`,
      headers: {
        Authorization: `Basic ${Buffer.from(
          "API_INTEGRATION:Welcome123456789@"
        ).toString("base64")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-csrf-token": csrfToken,
        Connection: "keep-alive",
      },
      data: data,
    };

    const patchResponse = await client.request(patchOptions);
    console.log("PATCH Response:", patchResponse.data);

    return patchResponse.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};

sap().then((result) => {
  console.log("Result:", result);
});