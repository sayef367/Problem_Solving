//user inputs a string and returns an object with total match vowels and matching vowels.

const vowels = ["a", "e", "i", "o", "u", "A", "E,", "I", "O", "U"];

function countVowels(data){
  let counts = [];
  const letters = Array.from(data); //create an array

  letters.forEach(function(value){
    if(vowels.includes(value)){  //check every value
      counts[counts.length] = value;
    }
  });

  return {
    totalMetchVowels: counts.length,
    metchVowels: counts
  };
};
console.log(countVowels("Mir Md Sayeful Islam"));