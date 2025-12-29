const APIResponse = require("./apiResponse");
const reverseStringKeepSymbols = require("../allprograms/reverse.js");

exports.reverse = (req, res) => { 
    const { userName } = req.body;

    if (!userName) {
        return APIResponse.validationErrorResponse(
            res,
            "userName is required"
        ); 
    }

    const reversed = reverseStringKeepSymbols(userName);

    return APIResponse.successResponse(
        res,
        "Success",
        { message: reversed } // only reversed string
    );
};


