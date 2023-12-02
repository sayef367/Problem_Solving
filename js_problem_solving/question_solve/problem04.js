//input same items in array and return an object how many duplicates data in array
//output = { '5': 2, Apple: 3, '🥭': 4, Orange: 2 }

const itemArr = ['Apple', '🥭', 5, 'Apple', '🥭', 'Orange', 5, 'Apple', '🥭', 'Orange', '🥭'];

function duplicates(items) {
  const itemsObject = {};

  items.map((data) => {
    itemsObject[data] = (itemsObject[data] || 0) + 1;
  });

  return itemsObject;
};

console.log(duplicates(itemArr));