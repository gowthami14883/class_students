
const APIResponse = require("./apiResponse");
const Dog = require("../allprograms/breed.js"); 
const calculator = require("../allprograms/calci.js");


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


exports.test5 = (req, res) => {
    const { factor, number } = req.body;

    if (factor === undefined || number === undefined) {
        return APIResponse.validationErrorResponse(
            res,
            "factor and number are required"
        );
    }

    if (typeof factor !== "number" || typeof number !== "number") {
        return APIResponse.validationErrorResponse(
            res,
            "factor and number must be numbers"
        );
    }

    function createMultiplier(factor) {
        return function (num) {
            return num * factor;
        };
    }

    const multiply = createMultiplier(factor);
    const result = multiply(number);

    return APIResponse.successResponse(
        res,
        "Success",
        { factor, number, result }
    );
};


exports.createDog = (req, res) => {
    const { name, breed } = req.body;

    if (!name && !breed) {
        return APIResponse.validationErrorResponse(
            res,
            "name and breed are required"
        );
    }

    if (!name) {
        return APIResponse.validationErrorResponse(
            res,
            "name is required"
        );
    }

    if (!breed) {
        return APIResponse.validationErrorResponse(
            res,
            "breed is required"
        );
    }

    const dog = new Dog(name, breed);

    const barkMessage = dog.bark();

    return APIResponse.successResponse(
        res,
        "Dog created successfully",
        {
            name: dog.name,
            breed: dog.breed,
            bark: barkMessage
        }
    );
};

exports.calculatorThis = (req, res) => {
    const { a, b } = req.body;

    if (a === undefined || b === undefined) {
        return APIResponse.validationErrorResponse(
            res,
            "Both a and b are required"
        );
    }

    return APIResponse.successResponse(
        res,
        "Calculator operations using this",
        {
            using: calculator.name,  
            addition: calculator.add(a, b),
            subtraction: calculator.subtract(a, b),
            multiplication: calculator.multiply(a, b),
            division: calculator.division(a, b)
        }
    );
};
