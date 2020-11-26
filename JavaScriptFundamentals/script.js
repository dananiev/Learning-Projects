// const person = {
//     name: 'John',
//     age: [30, 40, 50],
//     sayHello() {
//         return 'Hello'
//     }
// }
// console.log(person.sayHello());



// const num1 = 6;
// const num2 = '6';
// const value1 = num1 == num2;
// const value2 = num1 === num2;
// console.log(value1);
// console.log(value2);



// const cars = [
//     { brand: 'audi', year: 2010 },
//     { brand: 'volvo', year: 2012 },
//     { brand: 'seat', year: 2015 }
// ]
// const newCars = cars.map(car => {
//     return `<h1>${car.brand}</h1>`;
// })
// document.body.innerHTML = newCars.join('');
// console.log(newCars);


// const cars = [
//     { brand: 'BMW', year: 2010 },
//     { brand: 'Mercedes-Benz', year: 2012 },
//     { brand: 'Fiat', year: 2016 },
// ]
// const newCars = cars.filter(car => {
//     return car.brand === 'Audi';
// })
// console.log(newCars);


// const cars = [
//     { brand: 'BMW', year: 2010, id: 1 },
//     { brand: 'Mercedes-Benz', year: 2012, id: 2 },
//     { brand: 'Fiat', year: 2016, id: 3 },
// ]
// const newCars = cars.find(car => {
//     return car.id === 2;
// })
// console.log(newCars);
// const mountains = ['Rila', 'Pirin', 'Rodopi'];
// console.log(mountains.find(mountain => {
//     return mountain = 'Rila'
// }))


// const cars = [
//     { brand: 'BMW', year: 2010, price: 2000 },
//     { brand: 'Mercedes-Benz', year: 2012, price: 4000 },
//     { brand: 'Fiat', year: 2016, price: 1000 },
// ]
// const newCars = cars.reduce((acc, curItem) => {
//     console.log(`total: ${acc}`);
//     console.log(`current price: ${curItem.price}`);
//     acc += curItem.price;
//     return acc
// }, 0)
// console.log(newCars)

// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ]
// const days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
// ] 
// const date = new Date();
// const month = date.getMonth();
// console.log(month);
// console.log(months[month])
// const day = date.getDay();
// console.log(day);
// console.log(days[day]);
// console.log(date.getDate());
// console.log(date.getFullYear())
// const sentence = `Today is ${month + 1}th of ${months[month]} ${date.getFullYear()}`;
// const today = document.querySelector('.date')
// today.innerHTML = sentence;

// const color = document.querySelector('.date');
// color.innerHTML = 'Blue';
// color.style.backgroundColor = 'blue';
// color.style.color = 'orange';
// console.log(color);
// console.log(color.nodeName);
// console.log(color.style);
// const button = document.querySelector('.btn');
// button.addEventListener('click', () => {
//     console.log('hello')
// })
// const tags = document.getElementsByTagName('li');
// console.log(tags)
// const tagsArray = [...tags];
// tagsArray.forEach((tag) => {
//     console.log(tag)
// })
// const nodes = document.querySelector('.child')
// const allChildren = nodes.childNodes;
// console.log(allChildren);
// console.log(nodes.firstChild)

// const first = document.querySelector('h2');
// console.log(first.parentElement.parentElement.parentElement)

// const last = document.querySelector('.last');
// const first = document.querySelector('.first');
// const second = (first.nextSibling.nextSibling.style.color = 'blue');
// console.log(second);
// console.log(last.nextSibling.nextSibling)

// const content = document.querySelector('.content');
// const newContent = content.textContent;
// console.log(newContent)

// const content = document.querySelector('.content');
// const newContent = content.getAttribute('class');
// console.log(newContent);
// const newElement = document.getElementsByTagName('p')[0];
// newElement.setAttribute('class', 'newAttribute');
// newElement.textContent = 'new';
// console.log(newElement)
// const exper = document.querySelector('#orange');
// exper.classList.add('classListAdded');

// if (exper.classList.contains('classListAdded')) {
//     console.log('it is the right className')
// } else {
//     console.log('somethig is wrong with the className')
// }

// const result = document.querySelector('#result');

// const newElement = document.createElement('div');
// const text = document.createTextNode('hello from the new element');
// newElement.appendChild(text);
// document.body.appendChild(newElement);

// const anotherResult = document.querySelector('#resultOne')

// const heading = document.createElement('h2');
// const headingText = document.createTextNode('new element arrived');
// heading.appendChild(headingText);
// heading.classList.add('blue')
// anotherResult.appendChild(heading);

// const ul = document.createElement('div');
// const text = 'Hello from the innerHTML'
// ul.innerHTML = `<h1>${text}</h1>`;
// document.body.appendChild(ul);

// const btn = document.querySelector('.btn');
// const id = document.querySelector('.content');
// function toggle() {
//     if (id.classList.contains('content')) {
//         id.classList.add('blue')
//     } else {
//         id.classList.add('red')
//     }
// }
// btn.addEventListener('click', toggle);


// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.child');
// function colorful() {
//     ul.style.backgroundColor = 'darkviolet';
//     ul.style.color = 'white';
// }
// btn.addEventListener('mouseenter', colorful);


// const content = document.querySelector('.content');
// const keyBtn = document.querySelector('.search');
// function keyboard() {
//     content.style.background = 'green';
//     content.style.color = 'white';
// }
// keyBtn.addEventListener('keypress', keyboard);


// const content = document.querySelector('.content');
// const keyBtn = document.querySelector('.search');
// function keyboard() {
//     content.style.background = 'green';
//     content.style.color = 'white';
//     console.log(keyBtn.value)
// }
// keyBtn.addEventListener('keydown', keyboard);


// const form = document.querySelector('#form');
// const name = document.querySelector('#name');
// const password = document.querySelector('#password');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('submit')
//     console.log(name.value);
//     console.log(password.value)
// })

// localStorage.setItem('car', 'BMW');
// const carResult = localStorage.getItem('car');
// console.log(carResult);
// localStorage.removeItem('car');