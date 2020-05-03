function TrapeziodArea(input) {
    let sideA = +input.shift();
    let sideB = +input.shift();
    let height = +input.shift();
    let area = (sideA + sideB) * height / 2;
    console.log(area.toFixed(2));
}

TrapeziodArea([8, 13, 7]);