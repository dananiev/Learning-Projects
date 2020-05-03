let myElement = document.createElement('h1');
let mySpan = document.createElement('span');

mySpan.innerText = 'PianoPlayer';

myElement.classList.add('custom_class');

myElement.appendChild(mySpan);
document.body.appendChild(myElement);