const express = require("express");
const router = express.Router();
const taskController = require("../controller/task15dec");
router.post("/variable", taskController.variable);
router.post('/test1',taskController.test1)
module.exports = router;
