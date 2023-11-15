// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// input = [1,2,1,2,1,3,2];
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
// output 2

const array = [1,2,1,2,1,3,2];

function sockMerchant(arr) {
  let socks = {};
  let pairs = 0;
  for (let element of arr) {
  socks[element] = socks[element] + 1 || 1;
    if (socks[element] % 2 === 0) {
      pairs += 1;
    };
  };
  return pairs;
};

console.log(sockMerchant(array));