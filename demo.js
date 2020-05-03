function demo(input) {
    let n = +input.shift();

    let output = '';

    for (let i = 11111; i <= 99999; i += 1) {
        if (n % +i.toString()[0] === 0 &&
            n % +i.toString()[1] === 0 &&
            n % +i.toString()[2] === 0 &&
            n % +i.toString()[3] === 0 &&
            n % +i.toString()[4] === 0) {
                output += `${i} `;
            }
    }
    console.log(output);
}

demo([3]);