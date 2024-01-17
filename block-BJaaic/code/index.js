function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

// Animal methods
Animal.prototype.eat = function () {
    console.log(`I live in ${this.location} and I can eat`);
};

Animal.prototype.changeLocation = function (newLocation) {
    this.location = newLocation;
};

Animal.prototype.summary = function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
};
function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

// Animal methods
Animal.prototype.eat = function () {
    console.log(`I live in ${this.location} and I can eat`);
};

Animal.prototype.changeLocation = function (newLocation) {
    this.location = newLocation;
};

Animal.prototype.summary = function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
};

// Dog constructor
function Dog(location, numberOfLegs, name, color) {
    // Call the Animal constructor with Dog instance
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
}

// Set up prototype chain for Dog
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Dog-specific methods
Dog.prototype.bark = function () {
    console.log(`I am ${this.name} and I can bark 🐶`);
};

Dog.prototype.changeName = function (newName) {
    this.name = newName;
};

Dog.prototype.changeColor = function (newColor) {
    this.color = newColor;
};

Dog.prototype.summary = function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
};

// Example usage
const myDog = new Dog("Yard", 4, "Buddy", "Brown");
myDog.eat();
myDog.bark();
console.log(myDog.summary());

// Changing dog's name and color
myDog.changeName("Max");
myDog.changeColor("Black");
console.log(myDog.summary());

function Cat(location, numberOfLegs, name, colorOfEyes) {
    // Call the Animal constructor with Cat instance
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

// Set up prototype chain for Cat
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// Cat-specific methods
Cat.prototype.meow = function () {
    console.log(`I am ${this.name} and I can do meow meow 😹`);
};

Cat.prototype.changeName = function (newName) {
    this.name = newName;
};

Cat.prototype.changeColorOfEyes = function (newColor) {
    this.colorOfEyes = newColor;
};

Cat.prototype.summary = function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
};
