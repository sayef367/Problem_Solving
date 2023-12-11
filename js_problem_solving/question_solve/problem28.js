// - Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive). To see if a date is lucky,
// - Firstly, sequentially concatinate the date, month and year, into a new integer x erasing the leading zeroes.
// - Now if x is divisible by either 4 or 7, then we call the date a lucky date.
// - For example, let's take the date "02-08-2024". After concatinating the day, month and year, we get  x= 2082024. As x is divisible by 4 so the date "02-08-2024" is called a lucky date.
// - Debug the given function findPrimeDates and/or other lines of code, to find the correct lucky dates from the given input.
// input = 02-08-2025 04-09-2025
// output 5

let input = '02-08-2025 04-09-2025';
const month = [];

function updateLeapYear(year) {
  if (year % 400 == 0){
    month[2] = 29;
  } else if (year % 100 == 0){
    month[2] = 28;
  } else if (year % 4 == 0){
    month[2] = 29;
  } else {
    month[2] = 28;
  };
};

function storeMonth() {
  month[1] = 31;
  month[2] = 28;
  month[3] = 31;
  month[4] = 30;
  month[5] = 31;
  month[6] = 30;
  month[7] = 31;
  month[8] = 31;
  month[9] = 30;
  month[10] = 31;
  month[11] = 30;
  month[12] = 31;
};

function findPrimeDates(d1, m1, y1, d2, m2, y2) {
  storeMonth();
  let result = 0;
  while(true) {
    let x = d1;
    x = x * 100 + m1;
    x = x * 10000 + y1;
    if(x % 4 == 0 || x % 7 == 0) {
      result = result + 1;
    };
    if(d1 == d2 && m1 == m2 && y1 == y2) {
      break;
    };
    updateLeapYear(y1);
    d1 = d1 + 1;
    if(d1 > month[m1]) {
      m1 = m1 + 1;
      d1 = 1;
      if(m1 > 12) {
        y1 =  y1 + 1;
        m1 = 1;
      };
    };
  };
  return result;
};

let d = input.split(' ').join('-').split('-');
console.log(findPrimeDates(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3]), parseInt(d[4]), parseInt(d[5])));
