const DATA = require('./MOCK_DATA');

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

function straightSearch(data, sku) {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].sku === sku) {
      return data[i];
    }
  }
  return -1;
}

function binarySearch(sku, data) {
  let lower = 0;
  let upper = data.length - 1;
  let iterationCounter = 0;

  while (lower <= upper) {
    iterationCounter += 1;
    const middle = lower + Math.floor((upper - lower) / 2);
    if (sku === data[middle].sku) return [middle, iterationCounter];
    if (sku < data[middle].sku) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
}

function easySort(data) {
  return [...data].sort((a, b) => (a.sku > b.sku ? 1 : -1));
}

function bubbleSort(data) {
  const newData = [...data];
  for (let i = 0; i < newData.length - 1; i += 1) {
    for (let j = 0; j < newData.length - 1 - i; j += 1) {
      if (newData[j + 1].sku < newData[j].sku) {
        const el = newData[j + 1];
        newData[j + 1] = newData[j];
        newData[j] = el;
      }
    }
  }
  return newData;
}

function selectionSort(data) {
  const newData = [...data];
  for (let i = 0; i < newData.length - 1; i += 1) {
    let minEl = i;
    for (let j = i + 1; j < newData.length; j += 1) {
      if (newData[j].sku < newData[minEl].sku) minEl = j;
    }
    const el = newData[minEl];
    newData[minEl] = newData[i];
    newData[i] = el;
  }
  return newData;
}

// check
let start;
let end;

function assert(n, ev) {
  if (!!ev !== true) {
    console.error(`Assert ${n} failed`);
    return;
  }

  console.info(`Assert ${n} OK`);
}

// sort

assert('bubbleSort is', JSON.stringify(easySort(DATA)) === JSON.stringify(bubbleSort(DATA)));
assert('selectionSort is', JSON.stringify(easySort(DATA)) === JSON.stringify(selectionSort(DATA)));

start = process.hrtime();
bubbleSort(needleList);
end = process.hrtime(start);

console.log(`bubbleSort have passed in ${(end[0] * 100000000 + end[1]) / 100000000} seconds.`);

start = process.hrtime();
selectionSort(needleList);
end = process.hrtime(start);

console.log(`selectionSort have passed in ${(end[0] * 100000000 + end[1]) / 100000000} seconds.`);

start = process.hrtime();
easySort(needleList);
end = process.hrtime(start);

console.log(`easySort have passed in ${(end[0] * 100000000 + end[1]) / 100000000} seconds.`);

// search

const sortedData = easySort(needleList);

assert('straightSearch is', JSON.stringify(sortedData.indexOf(10)) === JSON.stringify(straightSearch(sortedData, 10)));
assert('binarySearch is', JSON.stringify(sortedData.indexOf(9)) === JSON.stringify(binarySearch(sortedData, 9)));

start = process.hrtime();
straightSearch(sortedData, 10);
end = process.hrtime(start);

console.log(`straightSearch have passed in ${(end[0] * 100000000 + end[1]) / 100000000} seconds.`);

start = process.hrtime();
binarySearch(sortedData, 9);
end = process.hrtime(start);

console.log(`binarySearch have passed in ${(end[0] * 100000000 + end[1]) / 100000000} seconds.`);
