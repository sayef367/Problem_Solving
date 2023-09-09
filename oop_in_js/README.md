# OOP was developed to make code more flexible and easier to maintain.
# JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.
# Four fundamental concepts of OOP Encapsulation, Abstraction, Inheritance, Polymorphism.

1. Objects
```bash
# In JavaScript, everything is an object or can be represented as one. Objects are collections of key-value pairs, where keys are strings (or symbols) and values can be any data type, including functions. You can create objects using object literals or constructor functions.
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
console.log(car.model); //return 500
```

2. Classes
```bash
# JavaScript introduced class syntax in ECMAScript 6 (ES6) to provide a more structured way to define objects and their behavior. Classes act as blueprints for creating objects.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  };
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  };
};
const myCar = new Car("Audi", 2014);
console.log(myCar.age()) //return 9
```