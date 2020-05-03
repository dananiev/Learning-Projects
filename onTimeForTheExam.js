function onTimeForTheExam(input) {
    let examHours = +input.shift();
    let examMinutes = +input.shift();
    let arriveHours = +input.shift();
    let arriveMinutes = +input.shift();

    let diffTotalMinutes = (arriveHours * 60 + arriveMinutes) - (examHours * 60 + examMinutes);
    let diffHours = Math.abs(diffTotalMinutes / 60);
    let diffMinutes = Math.abs(diffTotalMinutes % 60);

    if (diffTotalMinutes > 0) {
        console.log('Late');
    } else if (diffTotalMinutes >= -30) {
        console.log('On time');
    } else {
        console.log('Early');
    }

    if (diffTotalMinutes >= 60) {
        console.log(Math.floor(diffHours) + ':' + diffMinutes + ' ' + 'hours after the start');
    } else if (diffTotalMinutes > 0) {
        console.log(`${diffMinutes} minutes after the start`);
    }

    if (diffTotalMinutes <= -60) {
        console.log(Math.floor(diffHours) + ':' + Math.floor(diffMinutes) + '0' + ' ' + 'hours before the start');
    } else if (diffTotalMinutes < 0) {
        console.log(`${diffMinutes} minutes before the start`);
    }
}

onTimeForTheExam([9, 00, 10, 30]);