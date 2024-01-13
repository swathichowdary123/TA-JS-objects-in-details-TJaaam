// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name, age) {
    return {
        name: name,
        age: age,
        sayHello: function() {
            alert("Welcome " + this.name);
        }
    };
}
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
const personOne = createUser("Alice Smith", 30);
const personTwo = createUser("Bob Johnson", 35);
// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
// Prototype object with the sayHello method
const userPrototype = {
    sayHello: function() {
        alert("Welcome " + this.name);
    }
};

// createUser function now uses Object.create to set the prototype of the created object
function createUser(name, age) {
    const newUser = Object.create(userPrototype);
    newUser.name = name;
    newUser.age = age;
    return newUser;
}
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
// Constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to the prototype of the constructor function
User.prototype.sayHello = function() {
    alert("Welcome " + this.name);
};

// Usage of the constructor to create objects
 personOne = new User("Alice Smith", 30);
 personTwo = new User("Bob Johnson", 35)
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
// Constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to the prototype of the constructor function
User.prototype.sayHello = function() {
    alert("Welcome " + this.name);
};
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
// Constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to the prototype of the constructor function
User.prototype.sayHello = function() {
    alert("Welcome " + this.name);
};

// Creating new objects using the constructor
personOne = new User("Alice Smith", 30);
personTwo = new User("Bob Johnson", 35);
// 8. Convert the `createUser` function into `User` class.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        alert("Welcome " + this.name);
    }
}
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        alert("Welcome " + this.name);
    }
}

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        alert("Welcome " + this.name);
    }
}
