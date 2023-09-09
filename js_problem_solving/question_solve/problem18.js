// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// input
// string = ['def', 'de', 'fgh', 'sdf', 'sdfs', 'de']
// querie = ['de', 'lmn', 'fgh', 'sdfs']
// output [ 2, 0, 1, 1 ]

const string = ['def', 'de', 'fgh', 'sdf', 'sdfs', 'de'];
const querie = ['de', 'lmn', 'fgh', 'sdfs'];

function matchingStrings(strings, queries) {
  const stringArr = {};
  const querieArr = Array(queries.length);

  strings.forEach(str => {
    if (stringArr[str]) {
      stringArr[str]++;
    } else {
      stringArr[str] = 1;
    };
  });

  queries.forEach((value, index) => {
    if (stringArr[value]) {
      querieArr[index] = stringArr[value];
    } else {
      querieArr[index] = 0;
    };
  });

  return querieArr;
};

console.log(matchingStrings(string, querie));