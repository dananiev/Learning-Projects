function largestNumber(one, two, three) {

    if (one > two && one > three) {
        console.log(`The largest number is ${one}.`);
    } else if (two > one && two > three) {
        console.log(`The largest number is ${two}.`);
    } else {
        console.log(`The largest number is ${three}.`);
    }

}

largestNumber(5, -3, 16);