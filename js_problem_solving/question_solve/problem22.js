// Given a 2N x 2N matrix of integers. You are allowed to reverse any row or column any number of times and in any order. The task is to calculate the maximum sum of the upper-left N X N submatrix i.e the sum of elements of the submatrix from (0, 0) to (N – 1, N – 1).
// input [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]
// output 414

const inputMatrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];

function flippingMatrix(matrix) {
  let lenR = matrix.length;
  let lenC = matrix.length;
  let sum = 0;

  for(let row1 = 0; row1 < lenR / 2; row1++) {
    for (let col1 = 0; col1 < lenC / 2; col1++) {
      let row2 = lenR - row1 - 1;
      let col2 = lenC - col1 - 1;
      sum += Math.max(
        matrix[row1][col1], matrix[row1][col2], 
        matrix[row2][col1], matrix[row2][col2]
      );
    };
  };

  return sum;
};

console.log(flippingMatrix(inputMatrix));