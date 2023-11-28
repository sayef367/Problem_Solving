// - You will be given a list of integers, arr, and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr. Unfairness of an array is calculated as
// - Unfairness = max(arr) — min(arr)
// Where:
// - max denotes the largest integer in arr
// - min denotes the smallest integer in arr
// input [2,8,2,4,4,1] , k = 4
// output 2

const arrays = [2,8,2,4,4,1];
const k = 4;

function maxMin(k, arr) {
  // sort given array in ascending order
  arr.sort(function(a, b) {return a - b});
  
  let arrLoop = arr.length - k + 1;
  let unfairness = arr[arr.length - 1];

  for(let i = 0; i < arrLoop; i++) {
    // If the difference between elements with distance 'k' is less than minimum, update the minimum
    if(arr[i+k-1] - arr[i]<unfairness) {
      unfairness = arr[i+k-1] - arr[i];
    };
  };
  return unfairness;
};

console.log(maxMin(k, arrays));