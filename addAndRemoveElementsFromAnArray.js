function addAndRemoveElementsFromAnArray(arr) {

    let array = arr;
    let newArray = [];
    let number = 1;

    for (let i = 0; i < array.length; i += 1) {
        let command = array[i];

        if (command === 'add') {
            newArray.push(number);
        } else {
            newArray.pop();
        }

        number += 1;
    }

    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }

}

addAndRemoveElementsFromAnArray(['add', 'add', 'add', 'add']);