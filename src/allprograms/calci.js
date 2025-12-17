const calculator = {
  name: "Basic calculator",
  add: function (a, b) {
    console.log("using:",this.name);
    return a + b;
  },

  subtract: function (a, b) {
    console.log( "using:",this.name);
    return a - b;
  }
};
console.log(calculator.add(10, 5));      
console.log(calculator.subtract(10, 5)); 
