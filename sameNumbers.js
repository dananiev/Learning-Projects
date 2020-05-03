function solve(num) {

    let arrayOfNumbers = String(num).split('');
    let isSame = true;
    let firstElement = arrayOfNumbers[0];

    arrayOfNumbers.forEach(function (element) {
        if (element !== firstElement) {
            isSame = false;
        }
    });

    let sum = arrayOfNumbers
        .map(Number)
        .reduce((acc, curr) => acc + curr);

    console.log(isSame);
    console.log(sum);
}

solve(2222222);