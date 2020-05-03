function arrayRotation(arr, num) {

    let array = arr;
    let number = num;

    for (let i = 0; i < number; i += 1) {
        let currentElement = array.shift();
        array.push(currentElement);  
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);