function perfectNumber(num) {

    let sum = 0;

    for (let i = 1; i <= num; i += 1) {
        if (i % num === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }

}

perfectNumber(6);