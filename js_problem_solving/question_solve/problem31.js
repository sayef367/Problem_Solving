// - Given an integer n, we need to find the super digit of the integer.
// super_digit(9875) 9+8+7+5 = 29 
// super_digit(29) 	 2 + 9 = 11
// super_digit(11)	 1 + 1 = 2
// super_digit(2)		 = 2  
// - Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.
// - superDigit has the following parameter(s):
// string n: a string representation of an integer
// int k: the times to concatenate n to make p
// input 9875
// output 8

let strDigit = '9875';
let strLength = strDigit.length;

function findSum(num) {
  if(num.length === 1) {
    return parseInt(num);
  };
  let sum = 0;
  for(let x of num) {
    sum += parseInt(x);
  };
  return sum;
};

function superDigit(n, k) {
  let temp = findSum(n) * k;
  while(temp > 10){
    temp = findSum(temp.toString());
  };
  return temp;
};

console.log(superDigit(strDigit, strLength));