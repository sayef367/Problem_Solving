// reverse words in a string
// input "Mir Md Sayeful Islam"
// output "riM dM lufeyaS malsI"

const str = "Mir Md Sayeful Islam";

function strReverse(data) {
  const strArray = data.split(" ");

  const reverseArray = strArray.map(value => {
    return value.split("").reverse().join("");
  });

  return reverseArray.join(" ");
};

console.log(strReverse(str));