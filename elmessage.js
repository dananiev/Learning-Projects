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
    'Tempera#### na @#$ata 23 grad#%&.'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let string = gets();
let maxWrongSymbols = 0;


for(let i = 0; i <= string.length; i += 1) {
   if (i != 'A - Z') {
       i += 1;
       maxWrongSymbols += i;
       print(maxWrongSymbols);
   }
}

//function sumInput() {
  //  let numbers = [];
  //  while (true) {
    //  let value = prompt("A number please?", 0);
      // should we cancel?
  //    if (value === "" || value === null || !isFinite(value)) break;
  //    numbers.push(+value);
  //  }
  //  let sum = 0;
  //  for (let number of numbers) {
  //    sum += number;
  //  }
  //  return sum;
  // }
 // alert( sumInput() );

 //function sumInput() {
   // let numbers = [];
   //  let value = 0;
   // while(true) {
   //     if (value == '' || value == null || value == 'Cancel') { 
   //     numbers.push(+value);
   //     }
   //     return[numbers];
   // }
   // let sum = 0;
   // for (let number of numbers) {
   //     sum += number;
   // }
   // return sum;
//}
//print(sumInput('Tempera#### na @#$ata 23 grad#%&.'));