const xlsx = require("xlsx");
const path = require("path");

exports.uploadExcel = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const filePath = path.join(__dirname, "../../uploads", req.file.filename);
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert to JSON with custom headers
    const data = xlsx.utils.sheet_to_json(worksheet, {
        header: ["PROJECTNAME","TASKNAME","ASSIGNED_TO","START_DATE","DAYS_REQUIRED","END_DATE","PROGRESS"],
        range: 1,
        defval: ""
    });

    return res.status(200).json({
      success: true,
      total_records: data.length,
      data: data
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
