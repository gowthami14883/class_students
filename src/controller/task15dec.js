
const APIResponse = require("./apiResponse");
const Dog = require("../allprograms/breed.js"); 
const calculator = require("../allprograms/calci.js");
const Circle = require("../allprograms/es6.js");
const checkLogin = require("../allprograms/promises1.js");
const getUserProfile = require("../allprograms/promises2.js");





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


//17th dec 2025
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

    if (!temp) {
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

//18th dec 2025
exports.test5 = (req, res) => {
    try {
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

    } catch (error) {
        console.error("test5 error:", error);

        return APIResponse.errorResponse(
            res,
            "Internal Server Error",
            error.message
        );
    }
};


exports.test6 = (req, res) => {
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

exports.test7 = (req, res) => {
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


//19th dec 2025
exports.test8 = (req, res) => {
  const { radius } = req.body;

  if (radius === undefined) {
    return APIResponse.validationErrorResponse(res, "radius is required");
  }

  if (typeof radius !== "number" || radius <= 0) {
    return APIResponse.validationErrorResponse(
      res,
      "radius must be a positive number"
    );
  }

  const circle = new Circle(radius);
  const area = circle.getArea();

  return APIResponse.successResponse(res, "Success", {
    radius,
    area,
  });
};

exports.test9 = async (req, res) => {
  try {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data loaded successfully");
      }, 1500);
    });

    const message = await promise;

    return APIResponse.successResponse(
      res,
      "Success",
      { message }
    );
  } catch (error) {
    return APIResponse.errorResponse(
      res,
      "Internal Server Error",
      error.message
    );
  }
};

exports.test10 = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return APIResponse.validationErrorResponse(
        res,
        "userId is required"
      );
    }

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const user = await response.json();

    return APIResponse.successResponse(
      res,
      "Success",
      {
        name: user.name,
        email: user.email
      }
    );
  } catch (error) {
    return APIResponse.errorResponse(
      res,
      "Internal Server Error",
      error.message
    );
  }
};

//20th dec 2025 
exports.test11 = (req, res) => {
  const { username, password } = req.body;

  checkLogin(username, password)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: result
      });
    })
    .catch((error) => {
      res.status(401).json({
        success: false,
        message: error
      });
    });
};


exports.test12 = (req, res) => {
  const { userId } = req.params;

  getUserProfile(userId)
    .then((profile) => {
      res.json({
        success: true,
        data: profile
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: err
      });
    });
};
