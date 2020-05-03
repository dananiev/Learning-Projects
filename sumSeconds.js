function sumSeconds(input) {
    let first = +input.shift();
    let second = +input.shift();
    let third = +input.shift();

    let sum = first + second + third;

    let minutes = Math.floor(sum / 60);
    let seconds = sum % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds([35, 45, 44]);