class Employee {
  //Private variable
  #name;
  #salary;
  #noOfMonths;
  constructor(name, birthDay, salary, noOfMonths) {
    this.#name = name;
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
    return `${this.#name} is a ${this.getAge()} year old and her ${this.#noOfMonths} salary is ${this.#getSalary()}`;
  };
};

const sayef = new Employee("Sayef", "1994-09-27", 150000, 12);
const rakib = new Employee("Rakib", "1987-03-24", 200000, 12);

console.log(sayef.getDetails()); //Sayef is a 29 year old and her 12 salary is 1,800,000
console.log(rakib.getAge()); //37
console.log(rakib.birthDay); //1987-03-24

