const express = require("express");
const router = express.Router();
const { validateMarks } = require("../validation/marks.validate.js");
const marksController = require("../controller/marks.js");

router.post("/add", validateMarks, marksController.addMarks);
router.get("/get/:id", marksController.getMarks);
router.put("/update/:id", validateMarks, marksController.updateMarks);
router.delete("/delete/:id", marksController.deleteMarks);
module.exports = router;

