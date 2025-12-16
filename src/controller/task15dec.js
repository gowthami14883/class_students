const APIResponse = require("./apiResponse");
exports.variable = (req, res) => {
    const { text } = req.body;

    if (!text) {
        return APIResponse.validationErrorResponse(
            res,
            "text is required"
        );
    }
    const isArray = Array.isArray(text);
    const isObject =
        typeof text === "object" && !Array.isArray(text) && text !== null;

    if (!isArray && !isObject) {
        return APIResponse.validationErrorResponse(
            res,
            "text must be an array or an object"
        );
    }
    return APIResponse.successResponse(
        res,
        "Success",
        { text }
    );
};


exports.test1 = (req, res) => {
    const { userName,userAge } = req.body;

    if (!userName && !userAge) {
        return APIResponse.validationErrorResponse(
            res,
            "userName,userAge is required"
        );
    }else if(!userName){
        return APIResponse.validationErrorResponse(
            res,
            "userName is required"
        ); 
    }else if(!userAge){
        return APIResponse.validationErrorResponse(
            res,
            "userAge is required"
        ); 
    }
   const message = "Hello, my name is " + userName + " and i am " + userAge + " years old.";

    return APIResponse.successResponse(
        res,
        "Success",
        { message }
    );
};
