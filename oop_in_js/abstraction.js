class Student {
  constructor(bangla, english, math, computer, history) {
    this.bangla = bangla;
    this.english = english;
    this.math = math;
    this.computer = computer;
    this.history = history;
  };
  getTotalMarks() {
    return (this.bangla + this.english + this.math + this.computer + this.history);
  };
  getResult(pass) {
    return (this.getTotalMarks() > pass) ? "You are Pass" : "You are Fall";
  };
  getDetails() {
    return `${this.getResult()} and total marks is ${this.getTotalMarks()}`;
  };
};

const sayef = new Student(70,50,60,80,50);
const tanvir = new Student(30,50,20,40,35);

console.log(sayef.getTotalMarks()); //310
console.log(sayef.getResult(200)); //You are Pass
console.log(tanvir.getDetails()); //You are Fall and total marks is 175