function area(input) {
    let x1 = +input.shift();
    let y1 = +input.shift();
    let x2 = +input.shift();
    let y2 = +input.shift();

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let perimeter = length * width;
    let area = 2 * (length + width);
    console.log(perimeter.toFixed(2));
    console.log(area.toFixed(2));
}

area([60, 20, 10, 50]);