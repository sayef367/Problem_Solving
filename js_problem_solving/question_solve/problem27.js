// - Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
// grid = ['abc', 'ade', 'efg'];
// - The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different row.
// output YES

const gridArr = ['abc', 'ade', 'efg'];

function gridChallenge(grid) {
  const Grid = grid.map(item => {
    const temp = item.split('').sort();
    return temp;
  });
  
  const column = [];
  const gridLength = Grid.length;
  const gridLength1 = Grid[0].length;
  for(let i = 0; i<gridLength1; i++){
    let temp = '';
    for(let j = 0; j<gridLength; j++){
      temp += Grid[j][i];
    };
    column.push(temp);
  };
  
  const filterColumn = column.filter(item => {
    const temp = item.split('').sort().join('');
    return item === temp;
  });

  return filterColumn.length === column.length ? "YES" : "NO";
}

console.log(gridChallenge(gridArr));