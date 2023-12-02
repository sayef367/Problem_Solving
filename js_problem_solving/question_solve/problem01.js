//input data
const swap = [1,2,3,4,5];

//output [ 2, 1, 4, 3, 5 ]

function dataSwap(x) {
  const y = [];
  const swapLen = x.length - 1;
  for(let i=0; i<=swapLen; i++){
    if(i === swapLen){
      y.push(x[i]);
    } else if ((i % 2) === 0){
      y.push(x[i + 1]);
    } else {
      y.push(x[i - 1]);
    };
  };
  return y;
};

// return [ 2, 1, 4, 3, 5 ]
console.log(dataSwap(swap));