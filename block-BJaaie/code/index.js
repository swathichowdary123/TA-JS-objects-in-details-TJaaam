function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  
  // Methods for Animal class
  Animal.prototype.eat = function () {
    console.log(`I live in ${this.location} and I can eat`);
  };
  
  Animal.prototype.changeLocation = function (newLocation) {
    this.location = newLocation;
  };
  
  Animal.prototype.summary = function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  };
  
  //class pattern
  class Animal {
    constructor(location, numberOfLegs) {
      this.location = location;
      this.numberOfLegs = numberOfLegs;
    }
  
    eat() {
      console.log(`I live in ${this.location} and I can eat`);
    }
  
    changeLocation(newLocation) {
      this.location = newLocation;
    }
  
    summary() {
      return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
  }
  // Subclass: Dog
function Dog(name, color, location, numberOfLegs) {
    // Call the parent constructor
    Animal.call(this, location, numberOfLegs);
    
    // Additional properties for Dog class
    this.name = name;
    this.color = color;
  }
  
  // Set up the inheritance chain
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Additional methods for Dog class
  Dog.prototype.bark = function () {
    alert(`I am ${this.name} and I can bark 🐶`);
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
  
 //class pattern
 // Subclass: Dog
class Dog extends Animal {
    constructor(name, color, location, numberOfLegs) {
      // Call the parent constructor
      super(location, numberOfLegs);
      
      // Additional properties for Dog class
      this.name = name;
      this.color = color;
    }
  
    bark() {
      alert(`I am ${this.name} and I can bark 🐶`);
    }
  
    changeName(newName) {
      this.name = newName;
    }
  
    changeColor(newColor) {
      this.color = newColor;
    }
  
    // Override the summary method to include dog-specific information
    summary() {
      return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
  }
  // Subclass: Cat
function Cat(name, colorOfEyes, location, numberOfLegs) {
    // Call the parent constructor
    Animal.call(this, location, numberOfLegs);
    
    // Additional properties for Cat class
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  
  // Set up the inheritance chain
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  // Additional methods for Cat class
  Cat.prototype.meow = function () {
    alert(`I am ${this.name} and I can do meow meow 😹`);
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
// Subclass: Cat
class Cat extends Animal {
    constructor(name, colorOfEyes, location, numberOfLegs) {
      // Call the parent constructor
      super(location, numberOfLegs);
      
      // Additional properties for Cat class
      this.name = name;
      this.colorOfEyes = colorOfEyes;
    }
  
    meow() {
      alert(`I am ${this.name} and I can do meow meow 😹`);
    }
  
    changeName(newName) {
      this.name = newName;
    }
  
    changeColorOfEyes(newColor) {
      this.colorOfEyes = newColor;
    }
  
    // Override the summary method to include cat-specific information
    summary() {
      return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
  }  
