const pool = require('../db');  // DB connection
const { validation, validateStudentInput } = require('../util/validation');

exports.addStudent = async (req, res) => {
  const inputValidation = validateStudentInput(req.body);

  if (!inputValidation.success) {
    // Pass parameters to validation.js function
    return validation(false, inputValidation.message, res);
  }

  try {
    const { name } = inputValidation.data;

    // Insert into DB
    const [result] = await pool.execute(
      "INSERT INTO students (name) VALUES (?)",
      [name]
    );

    // Pass success data to validation.js
    validation(true, { id: result.insertId, name }, res);

  } catch (err) {
    console.error("DB Error:", err);
    validation(false, "Server error", res);
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students ORDER BY id DESC");
    validation(true, rows, res);
  } catch (err) {
    console.error("DB Error:", err);
    validation(false, "Server error", res);
  }

};