/**
 * ADDED FOR DEV-1260
 * CRON JOB FOR CHECKING AND SCHEDULING TASKS ACCORDINGLY
 */
const cron = require("cron");
const { CronJob } = cron;
const { default: axios } = require("axios");

const cronSchedule = "*/15 * * * *";// Running Every 15 Min

const schedulingTasks = async function () {
  console.log("Cron Started for Scheduling Tasks");

  try {
      const schedulingTasksResponse = await axios.post(
        `${process.env.API_URL}/v1/scheduleTasks`,
        {},
        {
          headers: { Authorization: process.env.API_KEY_NO_VALD },
        }
      );
      console.log(schedulingTasksResponse.data);
    } catch (error) {
      console.log(error);
    }

};

const job = new CronJob(cronSchedule, async () => {
  console.log("starting the cron");

  await schedulingTasks();
  console.log("cron ended");
});

job.start();

module.exports = { schedulingTasks };
