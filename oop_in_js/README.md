- OOP was developed to make code more flexible and easier to maintain.
- JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.
- Four fundamental concepts of OOP Encapsulation, Abstraction, Inheritance, Polymorphism.

## 1. Objects
In JavaScript, everything is an object or can be represented as one. Objects are collections of key-value pairs, where keys are strings (or symbols) and values can be any data type, including functions. You can create objects using object literals or constructor functions.
```bash
const Employee = {
  name: 'Sayeful',
  age: 28
};
console.log(Employee.name); //return Sayeful
```

## 2. Classes
JavaScript introduced class syntax in ECMAScript 6 (ES6) to provide a more structured way to define objects and their behavior. Classes act as blueprints for creating objects.
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

## 3. Encapsulation 
You can achieve encapsulation by using private and public fields and methods, although JavaScript does not have built-in access modifiers. Private fields and methods can be indicated by prefixing them with an hash '#' but they are not truly private.
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

## 4. Inheritance
JavaScript supports inheritance through prototype chains. You can use the extends keyword to create subclasses and inherit properties and methods from a parent class.
```bash
class Car {
  constructor(brand) {
    this.carname = brand;
  };
  present() {
    return 'I have a ' + this.carname;
  };
};
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  };
  show() {
    return this.present() + ', it is a ' + this.model;
  };
};
let myCar = new Model("Ford", "Mustang");
```

## 5. Abstraction
Objects only reveal internal mechanisms that are relevant for the use of other objects, hiding any unnecessary implementation code. The derived class can have its functionality extended. This concept can help developers more easily make additional changes or additions over time.
```bash
class Student {
  constructor(bangla, english, math, computer, history) {};
  getTotalMarks() {};
  getResult(pass) {};
  getDetails() {};
};
const sayef = new Student(70,50,60,80,50);
sayef.getTotalMarks();
sayef.getDetails();
```