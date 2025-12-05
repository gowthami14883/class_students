const express = require("express");
const router = express.Router();
const { validateStudent } = require("../validation/student.validate.js");
const studentController = require("../controller/student.js");

router.post("/add", validateStudent, studentController.addStudent);
router.get("/full/:id", studentController.getFullDetails);
router.put("/update/:id", validateStudent, studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
