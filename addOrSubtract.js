function addOrSubtract(arr) {

    let oldArray = arr;
    let newArray = [];
    let oldArraySum = 0;
    let newArraySum = 0;
    let ex = 0;

    for (let i = 0; i < oldArray.length; i += 1) {
        oldArraySum += oldArray[i];
        if (oldArray[i] % 2 === 0) {
            ex = oldArray[i] + i;
        } else {
            ex = oldArray[i] - i;
        }
        newArray.push(ex);
        newArraySum += newArray[i];
    }
    console.log(newArray);
    console.log(oldArraySum);
    console.log(newArraySum);
}

addOrSubtract([5, 15, 23, 56, 35]);