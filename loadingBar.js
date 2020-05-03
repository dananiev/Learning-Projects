function loadingBar(num) {

    let symbolRepeat = num / 10;
    let dots = 10 - symbolRepeat;
    let one = '%'.repeat(symbolRepeat);
    let two = '.'.repeat(dots);


    if (symbolRepeat < 10 && symbolRepeat > 0) {
        console.log(`${num}% [${one}${two}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[%%%%%%%%%%]`);
    }

}

loadingBar(30);