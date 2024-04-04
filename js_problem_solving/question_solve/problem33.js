// write a javascript program to return count of each character in a string.
// input 'i am a programmer'
// output { i: 1, a: 3, m: 3, p: 1, r: 3, o: 1, g: 1, e: 1 }

function countCharacter(str) {
  const temp = {};
  for (let element of str) {
    if(element !== ' ') {
      temp[element] = (temp[element] || 0) + 1;
    };
  };
  return temp;
};

let str = 'i am a programmer';

console.log(countCharacter(str));
