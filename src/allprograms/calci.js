const calculator = {
    name: "This Calculator",

    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    division: function(a, b) {
        return b !== 0 ? a / b : "Cannot divide by zero";
    }
};

module.exports = calculator;
