const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];


const newArray = [...alphabet, ...numbers];
//same as alphabet.concat(numbers);
console.log(newArray);


const [a,,, d, ...rest] = alphabet;
console.log(a);
console.log(d);
console.log(rest);


function sumAndMultiply(a, b) {
    return [a + b, a * b];
}
const [sum, multiply, division = 'no division'] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);