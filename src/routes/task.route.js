const express = require("express");
const router = express.Router();
const taskController = require("../controller/task15dec");
router.post("/variable", taskController.variable);
router.post('/test1',taskController.test1)
router.post('/test2',taskController.test2)
router.post('/test3',taskController.test3)
router.post('/test4',taskController.test4)






module.exports = router;
