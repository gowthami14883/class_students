const express = require("express");
const app = express();

// Correct relative path from run.js
const studentRoutes = require("../routes/student.route.js");
const marksRoutes = require("../routes/marks.routes.js");
const taskRoutes = require("../routes/task.route.js");

app.use(express.json());

// Use routes
app.use("/students", studentRoutes);
app.use("/marks", marksRoutes);
app.use("/task", taskRoutes);

const PORT = 4000;

app.listen(PORT, () => 
  console.log(`Server running on port http://localhost:${PORT}`)
);

