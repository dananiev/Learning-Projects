function distinctArray(arr) {

    let uniqueElements = [];

    for (let element of arr) {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    }

    console.log(uniqueElements.join(' '));
}

distinctArray([1, 2, 3, 4]);