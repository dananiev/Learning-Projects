const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const year = document.querySelector('#year');
const loading = document.querySelector('#loading');

const currentYear = new Date().getFullYear();
// console.log(currentYear);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
// console.log(newYearTime);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minute = Math.floor(diff / 1000 / 60) % 60;
    const second = Math.floor(diff / 1000) % 60;

    // Add values to DOM
    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = minute < 10 ? '0' + minute : minute;
    seconds.innerHTML = second < 10 ? '0' + second : second;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);