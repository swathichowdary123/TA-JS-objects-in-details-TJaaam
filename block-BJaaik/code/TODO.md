## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

// Base class
class LivingBeing {
    constructor(name) {
        this.name = name;
    }

    // Method
    eat() {
        console.log(`${this.name} is eating.`);
    }
}