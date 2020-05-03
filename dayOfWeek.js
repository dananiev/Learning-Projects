function dayOfWeek(number) {

    let weekDay = number;
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let day = '';

    if (weekDay === week.length - 6) {
        day = 'Monday';
    } else if (weekDay === week.length - 5) {
        day = 'Tuesday';
    } else if (weekDay === week.length - 4) {
        day = 'Wednesday';
    } else if (weekDay === week.length - 3) {
        day = 'Thursday';
    } else if (weekDay === week.length - 2) {
        day = 'Friday';
    } else if (weekDay === week.length - 1) {
        day = 'Saturday';
    } else if (weekDay === week.length) {
        day = 'Sunday';
    } else {
        console.log('Invalid day!');
    }

    console.log(day);

}

dayOfWeek(3);