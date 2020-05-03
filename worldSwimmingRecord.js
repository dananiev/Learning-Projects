function worldSwimmingRecord(input) {
    let record = +input.shift();
    let distance = +input.shift();
    let time = +input.shift();

    let timing = distance * time;
    let addedTime = Math.floor(distance / 15) * 12.5;
    let timeSum = timing + addedTime;

    if (timeSum >= record) {
        let notEnoughtTime = timeSum - record;
        console.log(`No, he failed! He was ${notEnoughtTime.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${timeSum.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord([10464, 1500, 20]);