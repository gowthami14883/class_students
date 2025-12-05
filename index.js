const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

app.post("/student", (req, res) => {
  const { name, age, course, marks } = req.body;

  const sql = "INSERT INTO students (name, age, course, marks) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, age, course, marks], (err, result) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ message: "Student Added", studentId: result.insertId });
  });
});


app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, data) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ students: data });
  });
});


app.get("/student/:id", (req, res) => {
  const sql = "SELECT * FROM students WHERE id = ?";
  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.json({ error: err });
    return res.json({ student: data[0] });
  });
});


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


app.delete("/student/:id", (req, res) => {
  const sql = "DELETE FROM students WHERE id = ?";
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ message: "Student Deleted" });
  });
});

app.get("/students/search", (req, res) => {
  const { name } = req.query;

  const sql = "SELECT * FROM students WHERE name LIKE ?";
  const nameSearch = `%${name}%`;

  db.query(sql, [nameSearch], (err, results) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ students: results });
  });
});

app.get("/students/pass", (req, res) => {
  const sql = "SELECT * FROM students WHERE marks >= 50";

  db.query(sql, (err, results) => {
    if (err) return res.status(400).json({ error: err });
    return res.json({ passed: results });
  });
});

app.listen(3000, () => {
  console.log("Student API running on http://localhost:3000");
});
