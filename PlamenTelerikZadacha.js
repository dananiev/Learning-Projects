const print = this.print || console.log;

let arr = ['1 2', '2 3', '7 6'];
let sum = 0;

for (let i = 0; i < arr.length; i += 1) {
    let currentNumber = 0;
    let currentString = arr[i];

    if (i % 2 === 0) {
        currentNumber = +currentString[2];
        //print(currentNumber);
    } else {
        currentNumber = +currentString[0];
        //print(currentNumber);
    }
    sum += currentNumber;
}
print(sum);


// function telerik(arr) {
//     let sum = 0;

//     const num = 1;
//         arr.forEach(function (num, i) {
//             let currentNumber = 0;
//             let currentString = arr[i];
//             console.log(currentString);

//             if (i % 2 === 0) {
//                 currentNumber = +currentString[0];
//                 console.log(currentNumber);
//             } else {
//                 currentNumber = +currentString[2];
//                 console.log(currentNumber);
//             }
//             sum += currentNumber;
//         });

//         return sum;
//     }

// console.log(telerik(arr));