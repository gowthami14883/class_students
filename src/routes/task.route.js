const express = require("express");
const router = express.Router();
const taskController = require("../controller/task15dec");
const taskController1 = require("../controller/task29dec");




router.post("/variable", taskController.variable);
router.post('/test1',taskController.test1)
router.post('/test2',taskController.test2)
router.post('/test3',taskController.test3)
router.post('/test4',taskController.test4)
router.post('/test5',taskController.test5)
router.post("/test6", taskController.test6);
router.post("/test7", taskController.test7);
router.post("/test8", taskController.test8);
router.post("/test9", taskController.test9);
router.post("/test10", taskController.test10);
router.post("/test11", taskController.test11);
router.get("/test12/:userId", taskController.test12);
router.get("/getUser/:id", taskController.getUser);
router.post("/test13",taskController.test13);
router.post("/students/sort", taskController.sortStudents);
router.post("/reverse", taskController1.reverse);





module.exports = router;
