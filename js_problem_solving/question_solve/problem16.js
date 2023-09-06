// The left-to-right diagonal 11 + 5 - 12 = 4. The right to left diagonal 4 + 5 + 10 = 19. Their absolute difference is |4 - 19| = 15.
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer
// input [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
// output 15

const mainArr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

function diagonalDifference(arr) {    
  const lTOr = []; //left-to-right 
  const rTOl = []; //right to left
  const xLength = arr.length - 1;
  // loop main array
  for(let x=0; x<=xLength; x++) {
    const yLength = arr[x].length - 1;
    // loop inner array
    for(let y=0; y<=yLength; y++){
      if(x === y) {
        lTOr.push(arr[x][x]);
        rTOl.push(arr[x][yLength - x]);
      };
    };
  };
  // total left-to-right value
  const totalLR = lTOr.reduce((total, value) => total + value);
  // total right to left value
  const totalRL = rTOl.reduce((total, value) => total + value);
  // Their absolute difference is:
  const total = totalLR - totalRL;
  // return without negative sign like 15 (-15)
  return (Math.sign(total) === -1) ? parseInt(total.toString().slice(1)) : total;
}

console.log(diagonalDifference(mainArr));