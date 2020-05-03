function spaceship(input) {
    let widthSs = +input.shift();
    let lengthSs = +input.shift();
    let heightSs = +input.shift();
    let HeightOfPeople = +input.shift();

    let volume = widthSs * lengthSs * heightSs;
    let volumeRoom = (HeightOfPeople + 0.40) * 2 * 2;
    let astronauts = Math.floor(volume / volumeRoom);

    if (astronauts > 3 && astronauts < 10) {
        console.log(`The spacecraft holds ${astronauts} astronauts.`);
    } else if (astronauts < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (astronauts > 10) {
        console.log(`The spacecraft is too big.`);
    }
}

spaceship([3.5, 4, 5, 1.70]);