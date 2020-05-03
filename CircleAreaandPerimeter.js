function CircleAreaandPerimeter(input) {
    let r = +input.shift();
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

CircleAreaandPerimeter([3, 4.5]);