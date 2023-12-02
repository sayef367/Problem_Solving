// Sorting words by length in a sentence by return object Ascending and Descending order.
// input = "JavaScript a high level programming language."
// output = { asc: 'a high level language. JavaScript programming', des: 'programming JavaScript language. level high a' }

const inputData = "JavaScript a high level programming language.";

function wordsSort(str) {
  const inputArray = str.split(" ");

  //ascending 
  const asc = inputArray.sort((x, y) => {
    return x.length - y.length;
  }).join(" ");

  //descending 
  const des = inputArray.sort((x, y) => {
    return y.length - x.length;
  }).join(" ");

  return { asc, des };
};

console.log(wordsSort(inputData));