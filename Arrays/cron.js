const express = require("express");
const axios = require("axios");
const { DateTime } = require("luxon");
const app = express();
const port = 3000;

// The route for testing the API endpoint
app.get("/test", (req, res) => {
  const { workflowId, projectId, accountUrl } = req.query;
  res.json({
    message: `Received workflowId: ${workflowId}, projectId: ${projectId}, accountUrl: ${accountUrl}`,
  });
});

// Function to simulate your cron job logic
async function runTest() {
  const workflows = [
    {
      projectId: "project123",
      accountUrl: "vod123444", // Just a string here
      nodes: [
        {
          id: "node1",
          data: {
            schedule: {
              time: "15:00",
              timezone: "UTC",
            },
          },
        },
        {
          id: "node2",
          data: {
            schedule: {
              time: DateTime.utc().toFormat("HH:mm"), // Force match for testing
              timezone: "UTC",
            },
          },
        },
      ],
    },
    // Added second document with another trigger
    {
      projectId: "project456",
      accountUrl: "vod456789", // Just a string here
      nodes: [
        {
          id: "node3",
          data: {
            schedule: {
              time: DateTime.utc().toFormat("HH:mm"),
              timezone: "UTC",
            },
          },
        },
        {
          id: "node4",
          data: {
            schedule: {
              time: DateTime.utc().toFormat("HH:mm"), // Force match for testing
              timezone: "UTC",
            },
          },
        },
      ],
    },
  ];

  const nowUTC = DateTime.utc();
  console.log(`Current UTC Time: ${nowUTC.toFormat("HH:mm")}`);

  workflows.forEach(({ projectId, accountUrl, nodes }) => {
    nodes.forEach((trigger) => {
      const {
        id,
        data: { schedule },
      } = trigger;

      const [hour, minute] = schedule.time.split(":").map(Number);
      const scheduledTimeUTC = DateTime.fromObject(
        { hour, minute },
        { zone: schedule.timezone }
      );

      const startBuffer = scheduledTimeUTC;
      const endBuffer = scheduledTimeUTC.plus({ minutes: 4 });

      if (nowUTC >= startBuffer && nowUTC <= endBuffer) {
        console.log(`Sending GET request for node ${id}`);

        // Add accountUrl to the GET request
        axios
          .get(
            `http://localhost:${port}/test?workflowId=${id}&projectId=${projectId}&accountUrl=${accountUrl}`
          )
          .then((response) => console.log("Response:", response.data))
          .catch((error) => console.error("Error:", error.message));
      }
    });
  });
}

// Start the Express server
app.listen(port, () => {
  console.log(`Test server running at http://localhost:${port}`);

  // Run the test logic once the server is up and running
  runTest();
});
