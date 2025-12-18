function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}
Dog.prototype.bark = function () {
    return `${this.name} says Woof!`;
};

module.exports = Dog;   
