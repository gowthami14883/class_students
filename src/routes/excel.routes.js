const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Import controller correctly
const { uploadExcel } = require("../controller/excel.controller"); // relative path from routes folder

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads")); // routes -> src -> ../.. -> uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage });

// POST /api/upload-excel
router.post("/upload-excel", upload.single("file"), uploadExcel);

module.exports = router;
