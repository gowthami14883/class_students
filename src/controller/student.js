const db = require("../file/database.js");

// ===================== ADD STUDENT =====================
exports.addStudent = (req, res) => {
  const { name, rollno, section, branch } = req.body;

  const sql =
    "INSERT INTO class_students (name, rollno, section, branch) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, rollno, section, branch], (err, result) =>
    err
      ? res.status(500).json({ error: err.sqlMessage })
      : res.json({ message: "Student added successfully" })
  );
};

// ===================== GET SINGLE STUDENT =====================
exports.getStudent = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM class_students WHERE id = ?";

  db.query(sql, [id], (err, result) =>
    err
      ? res.status(500).json({ error: "DB Error" })
      : result.length === 0
      ? res.status(404).json({ error: "Student not found" })
      : res.json(result[0])
  );
};

// ===================== UPDATE STUDENT =====================
exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, rollno, section, branch } = req.body;

  const sql =
    "UPDATE class_students SET name=?, rollno=?, section=?, branch=? WHERE id=?";

  db.query(sql, [name, rollno, section, branch, id], (err, result) =>
    err
      ? res.status(500).json({ error: err.sqlMessage })
      : result.affectedRows === 0
      ? res.status(404).json({ error: "Student not found" })
      : res.json({ message: "Student updated successfully" })
  );
};

// ===================== DELETE STUDENT =====================
exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM class_students WHERE id=?";

  db.query(sql, [id], (err, result) =>
    err
      ? res.status(500).json({ error: err.sqlMessage })
      : result.affectedRows === 0
      ? res.status(404).json({ error: "Student not found" })
      : res.json({ message: "Student deleted successfully" })
  );
};

// ===================== NEW: GET STUDENT + MARKS TOGETHER =====================
exports.getFullDetails = (req, res) => {
  const id = req.params.id;

  const studentQuery = "SELECT * FROM class_students WHERE id = ?";
  const marksQuery = "SELECT * FROM class_marks WHERE student_id = ?";

  db.query(studentQuery, [id], (err, studentResult) => {
    if (err) return res.status(500).json({ error: "DB Error" });

    if (studentResult.length === 0)
      return res.status(404).json({ error: "Student not found" });

    // Fetch marks
    db.query(marksQuery, [id], (err2, marksResult) => {
      if (err2) return res.status(500).json({ error: "DB Error" });

      return res.json({
        student: studentResult[0],
        marks: marksResult[0] || "No marks found",
      });
    });
  });
};
