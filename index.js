const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

// ----------------------------------------
// CREATE Student
// ----------------------------------------
app.post("/student", (req, res) => {
  const { name, age, course, marks } = req.body;

  const sql = "INSERT INTO students (name, age, course, marks) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, age, course, marks], (err, result) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ message: "Student Added", studentId: result.insertId });
  });
});

// ----------------------------------------
// READ All Students
// ----------------------------------------
app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, data) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ students: data });
  });
});

// ----------------------------------------
// READ Single Student
// ----------------------------------------
app.get("/student/:id", (req, res) => {
  const sql = "SELECT * FROM students WHERE id = ?";
  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.json({ error: err });
    return res.json({ student: data[0] });
  });
});

// ----------------------------------------
// UPDATE Student
// ----------------------------------------
app.put("/student/:id", (req, res) => {
  const { name, age, course, marks } = req.body;

  const sql = `
    UPDATE students 
    SET name=?, age=?, course=?, marks=? 
    WHERE id=?
  `;

  db.query(sql, [name, age, course, marks, req.params.id], (err) => {
    if (err) return res.status(400).json({ error: err });

    return res.json({ message: "Student Updated Successfully" });
  });
});

// ----------------------------------------
// DELETE Student
// ----------------------------------------
app.delete("/student/:id", (req, res) => {
  const sql = "DELETE FROM students WHERE id = ?";
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ message: "Student Deleted" });
  });
});

// ----------------------------------------
// EXTRA FEATURE: Search by Name
// ----------------------------------------
app.get("/students/search", (req, res) => {
  const { name } = req.query;

  const sql = "SELECT * FROM students WHERE name LIKE ?";
  const nameSearch = `%${name}%`;

  db.query(sql, [nameSearch], (err, results) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ students: results });
  });
});

// ----------------------------------------
// EXTRA FEATURE: Find Students with marks > 50
// ----------------------------------------
app.get("/students/pass", (req, res) => {
  const sql = "SELECT * FROM students WHERE marks >= 50";

  db.query(sql, (err, results) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ passed: results });
  });
});

// Server
app.listen(3000, () => {
  console.log("Student API running on http://localhost:3000");
});
