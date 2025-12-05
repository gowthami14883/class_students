const express = require('express');
const router = express.Router();
const student = require('./student'); // student controller

router.post('/student/add', student.addStudent);

router.get('/student/all', student.getAllStudents);

module.exports = router;
