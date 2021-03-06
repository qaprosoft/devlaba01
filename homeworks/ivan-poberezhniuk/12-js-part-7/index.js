const assert = require('assert');

const userList = require('./MOCK_DATA');

const needleList = [
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
];

const straightSearch = (array, value) => {
  for (let index = 0; index < array.length; index += 1) {
    const user = array[index];
    if (user.sku === value) {
      return user.sku;
    }
  }
  return undefined;
};

const binarySearch = (array, value) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const middleElement = array[middleIndex];

    if (value === middleElement.sku) {
      return value;
    }
    if (value > middleElement.sku) {
      startIndex = middleIndex + 1;
    }
    if (value < middleElement.sku) {
      endIndex = middleIndex - 1;
    }
  }
  return undefined;
};

const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i].sku < pivot.sku) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const check = (cb, list) => needleList.map((sku) => cb(list, sku));

console.time('straightSearch');
const straightSearchResult = check(straightSearch, userList);
console.timeLog('straightSearch', straightSearchResult, '\n');

console.time('sortedUserList');
const sortedUserList = quickSort(userList);
console.timeLog('sortedUserList', '\n');

console.time('binarySearch');
const binarySearchResult = check(binarySearch, sortedUserList);
console.timeLog('binarySearch', binarySearchResult, '\n');

assert.deepStrictEqual(needleList, binarySearchResult);
assert.deepStrictEqual(needleList, straightSearchResult);
