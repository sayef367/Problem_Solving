// Print two space-separated integers on one line: the minimum sum and the maximum sum of of elements.
// input [7, 4, 2, 11, 9]
// output 22 31

const arrInput = [7, 4, 2, 11, 9];

function miniMaxSum(arr) {
  let min = 0, max = 0;
  // sort the array ascending order
  arr.sort(function(a, b){return a - b});

  for(let x in arr){
    if(4 > x){
      min += arr[x]
    };
    if(0 < x){
      max += arr[x]
    };
  };

  console.log(min, max);
};

miniMaxSum(arrInput);