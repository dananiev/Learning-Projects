function TriangleArea(input) {
    let side = +input.shift();
    let height = +input.shift();
    let area = side * height / 2;
    console.log(area.toFixed(2));
}

TriangleArea([20, 30]);