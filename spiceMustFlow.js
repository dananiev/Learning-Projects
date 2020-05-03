function spiceMustFlow(number) {

    let startingYield = number;
    let produced = 0;
    let days = 0;

    if (startingYield < 100) {
        console.log(days);
        console.log(produced);
    } else {
        while (startingYield >= 100) {
            produced += startingYield - 26;
            startingYield -= 10;
            days += 1;
        }
        produced -= 26;
        console.log(days);
        console.log(produced);
    }

}

spiceMustFlow(111);