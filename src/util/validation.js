const validation = (success, dataOrMessage, res) => {
  if (!success) {
    return res.status(400).json({
      success: false,
      message: dataOrMessage
    });
  }


  return res.status(200).json({
    success: true,
    message: "Student created successfully",
    data: dataOrMessage
  });
};

module.exports = { validation };

// Optional: validation function to check student input
const validateStudentInput = ({ name }) => {
  if (!name || name.trim() === "") {
    return { success: false, message: "Name is required" };
  }
  return { success: true, data: { name: name.trim() } };
};
module.exports.validateStudentInput = validateStudentInput;

