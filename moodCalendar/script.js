const currentYear = 2020;
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const colors = ['#2d6b5f', '#72e3a6', '#dff4c7', '#edbf98', '#ea3d36'];
const defaultColor = '#888';
let activeColor = '';

const calendar = document.getElementById('calendar');
const moods = document.querySelectorAll('.mood');
const randomize = document.querySelector('#randomize');
const clear = document.querySelector('#clear');

moods.forEach(mood => {
    mood.addEventListener('click', () => {
        if (mood.classList.contains('selected')) {
            mood.classList.remove('selected');
            activeColor = defaultColor;
        } else {
            moods.forEach(mood => {
                mood.classList.remove('selected');
            });

            mood.classList.add('selected');
            activeColor = getComputedStyle(mood).getPropertyValue('color');
        }
    });
});

const getAllDays = year => {
    const firstDay = new Date(`January 1 ${year}`);
    const lastDay = new Date(`December 31 ${year}`);
    const days = [firstDay];
    let lastDayInArray = firstDay;

    while(lastDayInArray.getTime() !== lastDay.getTime()) {
        days.push(addDays(lastDayInArray, 1));
        lastDayInArray = days[days.length - 1];
    }

    return days;
};

const dates = getAllDays(currentYear);

let monthsHTML = '';

months.forEach((month, idx) => {
    monthsHTML += `<div class="months month_${idx}">
        <h3>${month}</h3>
        <div class="week_days_container">
            ${weekDays.map(day => `<div class="week_days">${day}</div>`).join('')}
        </div>
        <div class="days_container"></div>
    </div>`;
});

calendar.innerHTML = monthsHTML;

dates.forEach(date => {
    const month = date.getMonth();
    const monthEl = document.querySelector(`.month_${month} .days_container`);

    if (date.getDate() === 1 && date.getDay() !== 0) {
        for (let i = 0; i < date.getDay(); i++) {
            const emptySpot = createEmptySpot();

            monthEl.appendChild(emptySpot);
        }
    }

    const dateEl = createDateEl(date);
    monthEl.appendChild(dateEl);
});

const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        circle.style.backgroundColor = activeColor;
    });
});

randomize.addEventListener('click', () => {
    circles.forEach(circle => {
        circle.style.backgroundColor = getRandomColor();
    });
});

clear.addEventListener('click', () => {
    circles.forEach(circle => {
        circle.style.backgroundColor = defaultColor;
    })
})

function getRandomColor() {
    return colors[Math.floor(Math.random() * 5)];
}

function createDateEl() {
    const day = date.getDate();
    const dateEl = document.createElement('div');
    dateEl.classList.add('days');
    dateEl.innerHTML = `<span class="circle">${day}</span>`;

    return dateEl;
}

function createEmptySpot() {
    const emptyEl = document.createElement('div');
    emptyEl.classList.add('days');

    return emptyEl;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}