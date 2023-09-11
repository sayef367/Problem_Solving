- OOP was developed to make code more flexible and easier to maintain.
- JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.
- Four fundamental concepts of OOP Encapsulation, Abstraction, Inheritance, Polymorphism.

1. Objects
- In JavaScript, everything is an object or can be represented as one. Objects are collections of key-value pairs, where keys are strings (or symbols) and values can be any data type, including functions. You can create objects using object literals or constructor functions.
```bash
const Employee = {
  name: 'Sayeful',
  age: 28
};
console.log(Employee.name); //return Sayeful
```

2. Classes
- JavaScript introduced class syntax in ECMAScript 6 (ES6) to provide a more structured way to define objects and their behavior. Classes act as blueprints for creating objects.
```bash
class Employee {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  };
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  };
};
const sayef = new Employee("Sayeful", 1994);
console.log(sayef.age()) //return 29
```

3. Encapsulation 
- You can achieve encapsulation by using private and public fields and methods, although JavaScript does not have built-in access modifiers. Private fields and methods can be indicated by prefixing them with an hash '#' but they are not truly private.
```bash
class Counter {
  #value = 0;
  constructor() {
    // Private field
  };
  #increment() {
    this.#value++;
  };
  getValue() {
    return this.#value;
  };
  incrementValue() {
    this.#increment();
  };
};
```