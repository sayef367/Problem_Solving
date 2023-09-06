// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
// The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667
// input [-4, 3, -9, 0, 4, 1]
// output 
// 0.500000 
// 0.333333 
// 0.166667

const inputArr = [-4, 3, -9,-1, 4, 1];

function plusMinus(arr) {
  const arrLength = arr.length;
  //create a object
  const arrObj = {
    positive: 0,
    negative: 0,
    zero: 0
  };
  //loop array
  for(let i of arr) {
    if(Math.sign(i) === 1) {
      arrObj.positive = (arrObj.positive || 0) + 1;
    } else if(Math.sign(i) === -1) {
      arrObj.negative = (arrObj.negative || 0) + 1;
    } else {
      arrObj.zero = (arrObj.zero || 0) + 1;
    };
  };
  //Print the ratios of positive, negative and zero values in the array
  console.log((arrObj.positive === 0) ? arrObj.positive.toPrecision(7) : (arrObj.positive / arrLength).toPrecision(6));
  console.log((arrObj.negative === 0) ? arrObj.negative.toPrecision(7) : (arrObj.negative / arrLength).toPrecision(6));
  console.log((arrObj.zero === 0) ? arrObj.zero.toPrecision(7) : (arrObj.zero / arrLength).toPrecision(6));
};

plusMinus(inputArr);