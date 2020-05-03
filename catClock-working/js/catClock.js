let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let partyTime;
let evening = 18;

let showCurrentTime = function() {
    let clock = document.getElementById('clock');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';

    if (hours >= noon) {
        meridian = 'PM';
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';
    clock.innerText = clockTime;
};

let updateClock = function() {
    let time = new Date().getHours();
    let messageText;
    let image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';
    let timeEventJS = document.getElementById('timeEvent');
    let lolCatImageJS = document.getElementById('lolcatImage');

    if (time === partyTime) {
        image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
        messageText = "Let's party!";
    } else if (time === wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = 'Wake up!';
    } else if (time === lunchTime) {
        image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg';
        messageText = "Let's have some lunch!";
    } else if (time === napTime) {
        image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg';
        messageText = 'Sleep tight!';
    } else if (time < noon) {
        image = 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg';
        messageText = 'Good morning!';
    } else if (time >= evening) {
        image = 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg';
        messageText = 'Good evening!';
    } else {
        image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';
        messageText = 'Good afternoon!';
    }

    console.log(messageText);

    timeEventJS.innerText = messageText;
    lolCatImageJS.src = image;

    showCurrentTime();
};

updateClock();

let oneSecond = 1000;
setInterval(updateClock, oneSecond);

let partyButton = document.getElementById('partyTimeButton');

let partyEvent = function() {
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyButton.innerText = 'Party Over!';
        partyButton.style.backgroundColor = 'green';
    } else {
        partyTime = -1;
        partyButton.innerText = 'Party Time!';
        partyButton.style.backgroundColor = '#222';
    }
}

partyButton.addEventListener('click', partyEvent);
partyEvent();

let wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
let wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
}
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);


let lunchTimeSelector = document.getElementById('lunchTimeSelector');
let lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
}
lunchTimeSelector.addEventListener('change', lunchEvent);


let napTimeSelector = document.getElementById('napTimeSelector');
let napEvent = function() {
    napTime = napTimeSelector.value;
}
napTimeSelector.addEventListener('change', napEvent);