function magicSum(arr) {

    let ourSum = +arr[1];
    let myArray = arr[0].split(' ');
    let magic = [];

    for (let i = 0; i < myArray.length - 1; i += 1) {
        let currentElement = +myArray[i];

        for (let j = i + 1; j < myArray.length; j += 1) {
            let secondElement = +myArray[j];

            if (currentElement + secondElement === ourSum) {
                magic.push(currentElement + ' ' +secondElement);
            }
        }
    }
    console.log(magic.join('\n'));   
}

magicSum(['1 7 6 2 19 23', '8']);