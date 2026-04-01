const express = require("express");

const app = express();

app.get("/health", (req, res) => {
<<<<<<< HEAD
  res.json({ status: "ok", service: "vitalsync", timestamp: new Date() });
=======
  res.json({ status: "ok", version: "1.0.0", timestamp: new Date() });
>>>>>>> feature/update-health
});


app.get("/api/activities", (req, res) => {
  res.json([]);
});

if (require.main === module) {
  app.listen(3000, () => console.log("VitalSync API on :3000"));
}

module.exports = app;
