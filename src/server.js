const express = require('express');
require('dotenv').config();

const app = express();
const routes = require('./route');
const studentRoutes = require("./routes/student.route.js");
const marksRoutes = require("./routes/marks.routes.js");
const taskRoutes = require("./routes/task.route.js");
const excelRoutes = require("./routes/excel.routes.js"); 


app.use(express.json());
app.use('/api', routes);
app.use("/students", studentRoutes);
app.use("/marks", marksRoutes);
app.use("/task", taskRoutes);
app.use("/api", excelRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
