const express = require("express");
const router = express.Router();
const student = require("../controller/student.js");

router.get("/full/:id", student.getFullDetails);

module.exports = router;
