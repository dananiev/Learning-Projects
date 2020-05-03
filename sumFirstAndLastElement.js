function sumFirstAndLastElement(array) {

    let arr = array;
    let sum = +array[0] + +array[array.length - 1];
    console.log(sum);
     
}

sumFirstAndLastElement(['20', '30', '40']);