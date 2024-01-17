# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }
}
- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }
}
- Create another method named `calcArea` that will return the area of the square.
class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }

  calcArea() {
    return this.width * this.height;
  }
}


- Create a getter method named `area` that will return area of the square.
class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }

  get area() {
    return this.width * this.height;
  }
}
- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))
class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }

  get area() {
    return this.width * this.height;
  }

  setArea(value) {
    const side = Math.sqrt(value); // Assuming the input is a valid square area
    this.width = side;
    this.height = side;
  }
}
- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)
class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }

  get area() {
    return this.width * this.height;
  }

  setArea(value) {
    const side = Math.sqrt(value); // Assuming the input is a valid square area
    this.width = side;
    this.height = side;
  }

  static isEqual(square1, square2) {
    return square1.area === square2.area;
  }
}
- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
let s1 = new Square(6);
let s2 = new Square(8);
- Check the `area` getter method on both square.
console.log(s1.area);  
console.log(s2.area); 
- Check the `isEqual` method and pass the two instance you created above.
let areEqual = Square.isEqual(s1, s2);
console.log(areEqual);  
## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
- Create a getter method named `fullName` that will return the full name of the person.
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const nameParts = fullName.split(' ');

    if (nameParts.length < 2) {
      alert('Full name should have both first name and last name.');
      return;
    }

    const [newFirstName, newLastName] = nameParts;
    
    if (newFirstName.length < 1 || newLastName.length < 1) {
      alert('Both first name and last name should be at least 1 character long.');
      return;
    }

    if (fullName.length < 5) {
      alert('Full name should be more than 5 characters.');
      return;
    }

    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
}
- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const nameParts = fullName.split(' ');

    if (nameParts.length < 2) {
      alert('Full name should have both first name and last name.');
      return;
    }

    const [newFirstName, newLastName] = nameParts;

    if (newFirstName.length < 1 || newLastName.length < 1) {
      alert('Both first name and last name should be at least 1 character long.');
      return;
    }

    if (fullName.length < 5) {
      alert('Full name should be more than 5 characters.');
      return;
    }

    this.firstName = newFirstName;
    this.lastName = newLastName;
  }

  nameContains(text) {
    const fullName = this.fullName.toLowerCase();
    return fullName.includes(text.toLowerCase());
  }
}

- Create two instance of the `User` class
const user1 = new User("John", "Doe");
const user2 = new User("Arya", "Stark");
- Check by using the `fullName` setter method with name bigger than 5 characters.
// Creating an instance of the User class
const user1 = new User("John", "Doe");

// Updating full name using the fullName setter method
user1.fullName = "Arya Stark";

// Checking the updated full name
console.log(user1.fullName); // Output: Arya Stark
- Check by using the `fullName` setter method with name less than 5 characters.
// Creating an instance of the User class
const user1 = new User("John", "Doe");

// Attempting to update full name with a name less than 5 characters
user1.fullName = "Sam"; // This will trigger an alert

// Checking the original full name since the update failed
console.log(user1.fullName); // Output: John Doe
- Check the `fullName` using getter
// Creating an instance of the User class
const user1 = new User("John", "Doe");

// Using the fullName getter to check the full name
console.log(user1.fullName); // Output: John Doe
- Check the `nameContains` method
// Creating an instance of the User class
const user1 = new User("John", "Doe");
