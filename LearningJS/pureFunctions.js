const array = [1, 2, 3];

function addElementToArray(a, element) {
    return [...a, element];
}

const result = addElementToArray(array, 5);
console.log(array);
console.log(result);