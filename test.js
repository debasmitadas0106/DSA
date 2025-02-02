// testServer.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  const { workflowId, projectId } = req.query;
  res.json({ message: `Received workflowId: ${workflowId}, projectId: ${projectId}` });
});

app.listen(port, () => {
  console.log(`Test server running at http://localhost:${port}`);
});
