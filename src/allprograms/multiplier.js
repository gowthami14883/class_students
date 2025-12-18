function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyBy5 = createMultiplier(5);
console.log(multiplyBy5(10)); 
