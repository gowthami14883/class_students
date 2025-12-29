const APIResponse = require("./apiResponse");
const reverseStringKeepLettersBySegment = require("../allprograms/reverse.js");

exports.reverse = (req, res) => { 
    const { userName } = req.body;

    if (!userName) {
        return APIResponse.validationErrorResponse(
            res,
            "userName is required"
        ); 
    }

    const reversed = reverseStringKeepLettersBySegment(userName);

    return APIResponse.successResponse(
        res,
        "Success",
        { message: reversed }
    );
};

