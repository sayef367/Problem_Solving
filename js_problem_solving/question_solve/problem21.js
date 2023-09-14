// The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
// The sorted array arr = [1, 2, 3, 4, 5]. The middle element and the median is 3.
// input [5, 3, 1, 2, 4]
// output 3

const inputArr = [5, 3, 1, 2, 4];

function findMedian(arr) {
  const sortArr = arr.sort((a, b) => a - b);
  const mid = Math.floor(sortArr.length / 2);

  if (sortArr.length % 2 === 0) {
    return (sortArr[mid - 1] + sortArr[mid]) / 2;
  };

  return sortArr[mid];
};

console.log(findMedian(inputArr));