function timeMinutes(input) {
    let startHour = +input.shift();
    let startMinute = +input.shift();

    let timeInMinutes = startHour * 60 + startMinute;
    let timePlus15 = timeInMinutes + 15;

    let finalHour = Math.floor(timePlus15 / 60);
    let finalMinutes = timePlus15 % 60;

    if (finalHour >= 24) {
        finalHour -= 24;
    }

    if (finalMinutes < 10) {
        console.log(`${finalHour}:0${finalMinutes}`);
    } else {
        console.log(`${finalHour}:${finalMinutes}`);
    }
}

timeMinutes([1, 46]);