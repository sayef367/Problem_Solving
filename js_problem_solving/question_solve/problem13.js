// Given an array of integers, where all elements but one occur twice, find the unique element.
// input [1,2,3,4,3,2,1]
// output 4

const arr = [1,2,3,4,3,2,1];

function lonelyinteger(a) {
  const aLength = a.length;
  let unique = '';

  for(let x = 0; x < aLength; x++){
    let data = [];

    for(let y=0; y < aLength; y++){
      if((a[x] === a[y])){
        data.push(a[x]);
      };
    };

    if(data.length === 1) {
      unique += data[0];
      break;
    };
  };

  return unique;
};

console.log(lonelyinteger(arr));