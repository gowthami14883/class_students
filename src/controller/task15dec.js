
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


exports.test2 = (req, res) => {
    const { students } = req.body;

    if (!students) {
        return APIResponse.validationErrorResponse(
            res,
            "students is required"
        );
    }

    if (!Array.isArray(students)) {
        return APIResponse.validationErrorResponse(
            res,
            "students must be an array"
        );
    }

    students[0]?.push("gowthami");

    students[1]?.unshift("vaishnavi");

    students[2]?.push("gowthami");

    const removedLastStudent = students.pop();

    const removedFirstStudent = students.shift();

    students.unshift([0, "Gopi", 72, "C"]);

    students.push([4, "Anu", 88, "A"]);

    const hasAnu = students.some(student => student.includes("Anu"));

    return APIResponse.successResponse(
        res,
        "Students array processed successfully",
        {
            students,
            removedFirstStudent,
            removedLastStudent,
            hasAnu
        }
    );
};

exports.test3 = (req, res) => {
    const { length, breadth } = req.body;

    if (!length && !breadth) {
        return APIResponse.validationErrorResponse(
            res,
            "length and breadth are required"
        );
    } 
    else if (!length) {
        return APIResponse.validationErrorResponse(
            res,
            "length is required"
        );
    } 
    else if (!breadth) {
        return APIResponse.validationErrorResponse(
            res,
            "breadth is required"
        );
    }

    if (typeof length !== "number" || typeof breadth !== "number") {
        return APIResponse.validationErrorResponse(
            res,
            "length and breadth must be numbers"
        );
    }

    const perimeter = 2 * (length + breadth);

    return APIResponse.successResponse(
        res,
        "Perimeter calculated successfully",
        { perimeter }
    );
};

exports.test4 = (req, res) => {
    const { temp } = req.body;

    if (temp === undefined) {
        return APIResponse.validationErrorResponse(
            res,
            "temp is required"
        );
    }

    if (typeof temp !== "number") {
        return APIResponse.validationErrorResponse(
            res,
            "temp must be a number"
        );
    }

    let message;
    if (temp > 30) {
        message = "It's hot";
    } else {
        message = "It's moderate/cool";
    }
    return APIResponse.successResponse(
        res,
        "Success",
        { temp, message }
    );
};
