// reverse words in a string
// input like "I love JavaScrpt"
// output "I evol tprcSavaJ"

const str = "I love JavaScrpt";

function reverseString(data) {
  const arrayString = data.split(" ");

  const result = arrayString.map((value) => {
    return value.split("").reverse().join("");
  });

  return result.join(" ");
};

console.log(reverseString(str));