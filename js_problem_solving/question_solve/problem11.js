// return a object ascending and descending order array (not change the main array), max value and min value
// input [5, 10, 7, 9, 4, 15, 1]
// output { 
//   ascending: [1,  4,  5, 7, 9, 10, 15],
//   descending: [15, 10, 9, 7, 5,  4, 1],
//   min: 1,
//   max: 15
// }

const arr = [5, 10, 7, 9, 4, 15, 1];

function arrAscending(data) {
  //copy main array
  const a = [...data], d = [...data];

  return { 
    // ascending order array
    ascending: a.sort(function(a, b){return a - b}),
    // descending order array
    descending: d.sort(function(a, b){return b - a}),
    min: a[0],
    max: a[a.length - 1]
  };
};

console.log(arrAscending(arr));