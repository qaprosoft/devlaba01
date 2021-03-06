/* eslint-disable no-unused-vars */
// 1 Create a function to access the properties of an object.
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const randomValue = Math.random();
const nullValue = null;

const pluck = (nestedObj, str) => {
  const pathArr = str.split('.');
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : null),
    nestedObj
  );
};

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// 2. Deep Clone
// Create custom deep clone function.
const user2 = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

const clone = (obj) => JSON.parse(JSON.stringify(obj));
const clonedUser = clone(user2);
clonedUser.preferences.sound.maxValue = 70;

console.log(
  user2.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue
); // false

// 3 "A long time ago"
// Create a function that returns how long ago a certain day was.
function offset(dateProvided) {
  const date = moment(dateProvided);
  return date.fromNow();
}

console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('12/04/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));

// 4 Random dates
// Create a function that generate a random date between two dates
const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

function randomDate(SomeDate1, SomeDate2) {
  const D1 = moment(SomeDate1);
  const D2 = moment(SomeDate2);
  const random = moment(D1 + Math.random() * (D2 - D1));
  return moment(random);
}

console.log(randomDate(date1, date2).format('DD/MM/YY'));
// 20/02/2021

// 5 https://www.codewars.com/kata/merged-objects
function objConcat(arr) {
  const result = {};
  Object.assign(result, ...arr);
  return result;
}

// 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(newName) {
      const [firstName, lastName] = newName.split` `;
      if (lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },
  };
}

// optional:
// 9 https://www.codewars.com/kata/partial-keys
const partialKeys = (obj) => {
  const keys = Object.keys(obj);
  return new Proxy(obj, {
    get: (objct, partialKey) => {
      const key = keys.filter((k) => k.indexOf(partialKey) === 0).sort();
      return key[0] ? objct[key[0]] : undefined;
    },
  });
};
