// Declare an array. Nest a couple of loops to compare the numbers with other numbers in the array and Print the matching elements if found.
// input [1, 2, 3, 4, 5, 1, 2, 6, 7, 6]
// output [ 1, 2, 6 ]
const arrItem = [1, 2, 3, 4, 5, 1, 2, 6, 7, 6];

function duplicate(arr){
  const arrLength = arrItem.length;
  const duplicateItem = [];

  for (let m = 0; m < arrLength; m++) {
    for (let n = m+1; n < arrLength; n++) {
      if (arr[m] === arr[n]) {
        duplicateItem.push(arr[m]);
      };
    };
  };

  return duplicateItem;
};

console.log(duplicate(arrItem));