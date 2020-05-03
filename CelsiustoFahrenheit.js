function CelsiustoFahrenheit(input) {
    let celsius = +input.shift();
    let fahrenheit = (celsius * 9) / 5 + 32;
    console.log(fahrenheit.toFixed(2));
}

CelsiustoFahrenheit([25]);