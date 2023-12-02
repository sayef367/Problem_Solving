// reverse words in a string.
// output = "tpircSavaJ si a edis-tneilc .tpircs"

const inputString = "JavaScript is a client-side script."

function reverseString(str) {
  const stringArray = str.split(" "); //convert string to array

  const strResult = stringArray.map((data) => {
    return data.split("").reverse().join(""); //reverse words every array item
  });

  return strResult.join(" "); //add array to string
};

console.log(reverseString(inputString)); 