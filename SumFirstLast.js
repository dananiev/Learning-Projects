function sumFirstLast(arr) {

    let array = arr;
    let firstEl = array.shift();
    let lastEl = array.pop();

    let sum = +firstEl + +lastEl;
    console.log(sum);

}

sumFirstLast(['20', '30', '40']);
