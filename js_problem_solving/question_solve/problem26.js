// - Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
// - Declare an integer, lastAnswer, and initialize it to 0.
// - Declare an answers array.
// - Parse through each query. The format of each query will be [type, x, y]. There are 2 types of queries, given as an array of strings for you to parse, treat them according to their type:
// 1. Query: 1 x y
  // Let idx = ( (x ^ lastAnswer) % n ).
  // Append the integer y to arr[idx].
// 2. Query: 2 x y
  // Let idx = ( (x ^ lastAnswer) % n ).
  // Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
  // Store the new value of lastAnswer to answers array.
// - Return answers array.
// - Note: ^ is the bitwise XOR operation. % is the modulo operator.
// Finally, size(arr[idx]) is the number of elements in arr[idx].
// input nNo = 2, queriesArr = [[1,0,5], [1,1,7],[1,0,3],[2,1,0],[2,1,1]]
// output 7, 3

let nNo = 2;
const queriesArr = [[1,0,5], [1,1,7],[1,0,3],[2,1,0],[2,1,1]];

function dynamicArray(n, queries) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  };
  let lastAnswer = 0;
  const answers = [];
  let querieLength = queries.length;
  for (let i = 0; i < querieLength; i++) {
    const type = queries[i][0];
    const x = queries[i][1];
    const y = queries[i][2];
    const idx = (x ^ lastAnswer) % n;
    if (type === 1) {
      arr[idx].push(y);
    } else if (type === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    };
  };
  return answers;
};

console.log(dynamicArray(nNo, queriesArr))