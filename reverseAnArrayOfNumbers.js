function reverseAnArrayOfNumbers(n, inputArr) {

    let arr = [];

    for (let i = 0; i < n; i += 1) {
        arr.push(inputArr[i]);
    }

    let output = '';

    for (let i = arr.length - 1; i >= 0; i -= 1) {
        output += `${arr[i]} `;
    }

    console.log(output);

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);