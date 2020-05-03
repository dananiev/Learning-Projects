function firstAndLastKNumbers(input) {
    let k = input.shift();

    let firstElements = input.slice(0, k);
    let lastElements = input.slice(input.length - k);

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}  

firstAndLastKNumbers([2, 7, 8, 9]);