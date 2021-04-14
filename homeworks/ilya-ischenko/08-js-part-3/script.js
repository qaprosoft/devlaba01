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

// task 1
function pluck(obj, prop) {
  if (!(obj instanceof Object) || obj === null) {
    return null;
  }

  const propArr = [...prop.split('.')];
  const key = propArr[0];
  propArr.shift();

  if (propArr.length) {
    if (!obj[key]) {
      return null;
    }
    return pluck(obj[key], propArr.join('.'));
  }

  return obj[key];
};
console.log(pluck(user, 'preferences.sound.value'));
console.log(pluck(user, 'unknown.key'));
console.log(pluck(randomValue, 'unknown.key'));
console.log(pluck(nullValue, 'unknown.key'));

// task 2
function clone(obj) {
  let cloneObj = {};

  // eslint-disable-next-line no-restricted-syntax
  for (let [key, value] of Object.entries(obj)) {
    if (value instanceof Object && value !== null) {
      cloneObj[key] = clone(obj[key]);
    } else {
      cloneObj[key] = value;
    }
  }

  return cloneObj;
};
const clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70;
console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);

// task 3
function dateOffset(date) {
  let result = '';
  let secondDate = Date.parse(new Date());
  let firstDate = date.split(',').map(n => +n.trim());
  firstDate = Date.parse(new Date(...firstDate));

  let diff = (secondDate - firstDate) / 1000;

  // DAYS
  if (diff >= 86400) {
    const d = Math.floor(diff / 86400);
    diff -= d * 86400;

    result += d > 1 ? d + ' days ' : d + ' day ';
  }

  // HOURS
  if (diff >= 3600) {
    const h = Math.floor(diff / 3600);
    diff -= h * 3600; 

    result += h > 1 ? h + ' hours ' : h + ' hour ';
  }

  // MINUTES
  if (diff >= 60) {
    const m = Math.floor(diff / 60);
    diff -= m;

    result += m > 1 ? m + ' minutes ' : m + ' minute ';
  }

  return result += 'ago';
};
console.log(dateOffset('2021, 03, 5, 20, 32'));

// TASK 4
function randomDate(firstDate, secondDate) {
  let date1 = firstDate.split(',').map(n => +n.trim());
  date1 = Date.parse(new Date(firstDate));
  let date2 = firstDate.split(',').map(n => +n.trim());
  date2 = Date.parse(new Date(secondDate));

  const resultDate = Math.trunc((date2 - date1) * Math.random() + date1);
  return new Date(resultDate);
};
console.log(randomDate('2021, 03, 5', '2021, 03, 20'));

// TASK 5 https://www.codewars.com/kata/merged-objects
let a = {'1':'1', '2':'2', '3':'3'};
let b = {'3':'4', '5':'6', '6':'7', '7':'8'};
let c = {'5':'9', '8':'9', '6':'12', '23':'35'};
let o = [a, b, c];
const objConcat = (objects) => Object.assign({}, ...objects);
console.log(objConcat(o));

// TASK 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript
function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
      const nameArr = value.split(' ');

      if (nameArr.length === 2) {
        [this.firstName, this.lastName] = nameArr;
      }
    },
  };
};
const person = new NamedOne('Ilya', 'Ischenko');
const person2 = new NamedOne('Ilya', 'Ischenko');
person.firstName = 'Dima';
console.log(person.fullName);
person.fullName = 'Giovanni Fabbri';
console.log(person.fullName);
console.log(person.lastName);
console.log(person2.fullName);