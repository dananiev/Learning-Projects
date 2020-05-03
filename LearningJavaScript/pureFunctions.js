//not pure function
const array = [1, 2, 3];
function addElementToArray(element) {
    array.push(element);
}
addElementToArray(4);
console.log(array);


//not pure function
const arrayOne = [1, 2, 3];
function addNumberToArray(a, el) {
    a.push(el);
}
addNumberToArray(arrayOne, 24);
console.log(arrayOne);


//pure function
const arrayTwo = [1, 2, 3];
function addToArray(b, elem) {
    return [...b, elem];
}
console.log(addToArray(arrayTwo, 54));
console.log(arrayTwo);