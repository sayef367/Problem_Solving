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
  getDetails() {
    return `${this.name} is a ${this.getAge()} year old and her ${this.#noOfMonths} salary is ${this.#getSalary()}`;
  };
};

class Employee2 extends Employee1 {
  //Private variable
  #gender
  constructor(name, birthDay, salary, noOfMonths, gender) {
    super(name, birthDay, salary, noOfMonths); //extend variable Employee1
    this.#gender = gender;
  };
  details() {
    return `${this.getDetails()} and gender is ${this.#gender}`;
  };
};

const sayef = new Employee1("Sayef", "1994-09-27", 150000, 12);
const rakib = new Employee2("Rakib", "1994-09-27", 150000, 12, "Male");

console.log(sayef.getDetails()); //Sayef is a 29 year old and her 12 salary is 1,800,000
console.log(rakib.details()); //Rakib is a 29 year old and her 12 salary is 1,800,000 and gender is Male
console.log(rakib.getAge()); //29

