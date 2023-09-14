class Employee1 {
  //Private variable
  #salary;
  #noOfMonths;
  constructor(name, birthDay, salary, noOfMonths) {
    this.name = name;
    this.birthDay = birthDay;
    this.#salary = salary;
    this.#noOfMonths = noOfMonths;
  };
  getAge() {
    const calculateTime = Date.now() - new Date(this.birthDay).getTime();
    const calculateDate = new Date(calculateTime);
    return Math.abs(calculateDate.getUTCFullYear() - 1969);
  };
  // Private function
  #getSalary() {
    return (this.#salary * this.#noOfMonths).toLocaleString();
  };
  totalMonth() {
    return this.#noOfMonths;
  }
  empSalary() {
    return (this.#salary * this.#noOfMonths).toLocaleString();
  };
  getDetails() {
    return `${this.name} is a ${this.getAge()} year old and her ${this.#noOfMonths} month salary is ${this.#getSalary()}`;
  };
};

class Employee2 extends Employee1 {
  //Private variable
  #gender
  constructor(name, birthDay, salary, noOfMonths) {
    super(name, birthDay, salary, noOfMonths); //extend variable Employee1
  };
  getDetails() {
    return `${this.name} age is ${this.getAge()} year and ${this.totalMonth()} month salary is ${this.empSalary()}`;
  };
};

const sayef = new Employee1("Sayef", "1994-09-27", 150000, 12);
const rakib = new Employee2("Rakib", "1995-09-20", 200000, 12);

console.log(sayef.getDetails()); //Sayef is a 29 year old and her 12 salary is 1,800,000
console.log(rakib.getDetails()); //Rakib age is 29 year and 12 month salary is 2,400,000
console.log(rakib.getAge()); //29

