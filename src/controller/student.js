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

// ===================== GET STUDENT + MARKS + PERCENTAGE + GRADE =====================
exports.getFullDetails = (req, res) => {
  const id = req.params.id;

  const studentQuery = "SELECT * FROM class_students WHERE id = ?";
  const marksQuery = "SELECT * FROM class_marks WHERE student_id = ?";

  db.query(studentQuery, [id], (err, studentResult) => {
    if (err) return res.status(500).json({ error: "DB Error" });

    if (studentResult.length === 0)
      return res.status(404).json({ error: "Student not found" });

    db.query(marksQuery, [id], (err2, marksResult) => {
      if (err2) return res.status(500).json({ error: "DB Error" });

      if (marksResult.length === 0) {
        return res.json({
          student: studentResult[0],
          marks: "No marks found",
        });
      }

      const m = marksResult[0];

      // ===================== CALCULATE TOTAL, PERCENTAGE =====================
      const total =
        m.sub1 + m.sub2 + m.sub3 + m.sub4 + m.sub5 + m.sub6;

      const percentage = (total / 600) * 100;

      // ===================== CALCULATE GRADE =====================
      let grade = "";
      if (percentage >= 90) grade = "A+";
      else if (percentage >= 80) grade = "A";
      else if (percentage >= 70) grade = "B";
      else if (percentage >= 60) grade = "C";
      else if (percentage >= 50) grade = "D";
      else grade = "Fail";

      return res.json({
        student: studentResult[0],
        marks: m,
        total: total,
        percentage: percentage.toFixed(2),
        grade: grade,
      });
    });
  });
};
