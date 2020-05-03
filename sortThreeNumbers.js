'use strict';

const getGets = (arr) => {
    let index = 0;

    return() => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '1',
    '2',
    '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num1 = +gets();
let num2 = +gets();
let num3 = +gets();

let smallest = null;
let middlest = null;
let biggest = null;

  if (num1 <= num2 && num1 <= num3) {
      smallest = num1;
  } else if (num2 <= num1 && num2 <= num3) {
      middlest = num2;
  } else if (num3 <= num1 && num3 <= num2) {
      biggest = num3;
  }

  if (((num1 >= num2 && num1 <= num3) || (num1 >= num3 && num1 <= num2))) {
      middlest = num1;
  } else if (((num2 >= num1 && num2 <= num3) || (num2 >= num3 && num2 <= num1))) {
      middlest = num2;
  } else if (((num3 >= num1 && num3 <= num2) || (num3 >= num2 && num3 <= num1))) {
      middlest = num3;
  }

  if (num1 >= num2 && num1 >= num3) {
      biggest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
      biggest = num2;
  } else if (num3 >= num1 && num3 >= num2) {
      biggest = num3;
  }

  print(biggest + ' ' + middlest + ' ' + smallest);

