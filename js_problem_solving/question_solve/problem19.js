// input sequence data and first remove sequence duplicate data then match array data. If all sequence data match the array then return true or false.
// input 
// array [5, 1, 22, 25, 6, -1, 8];
// sequence [5, 1, 22, 22, 25, 6, -1, 8];
// output true

const arrayInput = [5, 1, 22, 25, 6, -1, 8];
const sequenceInput = [5, 1, 22, 22, 25, 6, -1, 8];

function isValidSubsequence(array, sequence) {
  const total = [];
  const unique = [];

  //remove duplicates
  const sequenceUnique = new Set(sequence);
  //loop set data and push unique
  sequenceUnique.forEach( value => unique.push(value) );
  
  //array and unique array length
  const arrayLen = array.length;
  const uniqueLen = unique.length;
  
  for (let i = 0; i < uniqueLen; i++) {
    for (let j = 0; j < arrayLen; j++) {
      if (unique[i] === array[j]) {
        total.push(array[j]);
        break;
      };
    };
  };

  return total.length === uniqueLen; //return true or false
};

console.log(isValidSubsequence(arrayInput, sequenceInput));