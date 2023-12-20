// - Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right. For instance, given the array arr=[5,6,8,11], 8 is between two subarrays that sum to 11. If your starting array is[1], that element satisfies the rule as left and right sum to 0.
// - You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.
// input [5,6,8,11]
// output YES

const array = [5,6,8,11];

function balancedSums(arr) {
  let totalSum = 0;
  let runningSum = 0;
  let arrLength = arr.length;
  
  for(let i = 0; i < arrLength; i++) {
    totalSum += arr[i];
  };

  for(let i = 0; i < arrLength; i++) {
    if (runningSum == totalSum - runningSum - arr[i]) return "YES";
    runningSum += arr[i];
  };

  return "NO";
};

console.log(balancedSums(array));