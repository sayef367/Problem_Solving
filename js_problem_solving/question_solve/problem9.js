// Remove duplicate elements from JavaScript Array.
// output [ 1, 'sayef', 4, 10, 2 ]

const arr = [1, 'sayef', 4 , 'sayef' , 10, 2 , 10];

function removeDuplicate(data) {
  //remove duplicate using set
  const setArr = new Set(data);
  //add new array
  const newArr = [];
  //loop Set value
  setArr.forEach(function(value) {
    newArr.push(value); 
  });

  return newArr;
};

console.log(removeDuplicate(arr));