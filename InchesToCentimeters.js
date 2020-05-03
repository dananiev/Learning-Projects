function InchesToCentimeters(input) {
    let inches = +input.shift();
    let cm = inches * 2.54;
    console.log(cm.toFixed(2));
}

InchesToCentimeters([5]);