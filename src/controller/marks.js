const db = require("../file/database.js");

exports.addMarks = (req, res) => {
  const { student_id, sub1, sub2, sub3, sub4, sub5, sub6 } = req.body;
  const sql = "INSERT INTO class_marks (student_id, sub1, sub2, sub3, sub4, sub5, sub6) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [student_id, sub1, sub2, sub3, sub4, sub5, sub6], (err, result) => err ? res.status(500).json({ error: err.sqlMessage }) : res.json({ message: "Marks added successfully" }));
};

exports.getMarks = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM class_marks WHERE id = ?";
  db.query(sql, [id], (err, result) => err ? res.status(500).json({ error: "DB Error" }) : result.length === 0 ? res.status(404).json({ error: "Marks not found" }) : res.json(result[0]));
};

exports.updateMarks = (req, res) => {
  const id = req.params.id;
  const { sub1, sub2, sub3, sub4, sub5, sub6 } = req.body;
  const sql = "UPDATE class_marks SET sub1=?, sub2=?, sub3=?, sub4=?, sub5=?, sub6=? WHERE id=?";
  db.query(sql, [sub1, sub2, sub3, sub4, sub5, sub6, id], (err, result) => err ? res.status(500).json({ error: err.sqlMessage }) : result.affectedRows === 0 ? res.status(404).json({ error: "Marks not found" }) : res.json({ message: "Marks updated successfully" }));
};

exports.deleteMarks = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM class_marks WHERE id=?";
  db.query(sql, [id], (err, result) => err ? res.status(500).json({ error: err.sqlMessage }) : result.affectedRows === 0 ? res.status(404).json({ error: "Marks not found" }) : res.json({ message: "Marks deleted successfully" }));
};
