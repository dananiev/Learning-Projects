function metricConverter(input) {
    let num = +input.shift();
    let inputMeasuringUnit = input.shift();
    let outputMeasuringUnit = input.shift();

    if (inputMeasuringUnit === 'mm') {
        num /= 1000;
    } else if (inputMeasuringUnit === 'cm') {
        num /= 100;
    }

    if (outputMeasuringUnit === 'mm') {
        num *= 1000;
    } else if (outputMeasuringUnit === 'cm') {
        num *= 100;
    }

    console.log(num.toFixed(3));
}

metricConverter([12, 'mm', 'm']);