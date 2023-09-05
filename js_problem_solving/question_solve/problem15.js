// How would you find the second largest number in an array?
// input [2,12,3,55,6,43,31,9]
// output 43

const arr = [2,12,3,55,6,43,31,9];

function secondLargest(data) {
  //Sorting ascending
  data.sort(function(a, b){return a - b});

  return data[data.length - 2];
};

console.log(secondLargest(arr));