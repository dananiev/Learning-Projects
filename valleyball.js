function valleyball(input) {
    let year = input.shift();
    let p = +input.shift();
    let hweekends = +input.shift();
    let sweekends = 48 - hweekends;

    let playdays = (sweekends * 3.0 / 4) + (p * 2.0 / 3) + hweekends;

    if (year === 'normal') {
        console.log(Math.trunc(playdays));
    } else {
        console.log(Math.trunc((playdays * 0.15) + playdays));
    }
}

valleyball(['leap', 5, 2]);