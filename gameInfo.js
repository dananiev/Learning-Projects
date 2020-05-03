function gameInfo(input) {
    let team = input.shift();
    let games = +input.shift();
    let totalMin = 0;
    let average = 0.0;
    let gameWithAddTime = 0;
    let penalties = 0;

    for (let i = 1; i <= games; i += 1) {
        let time = +input.shift();
        totalMin = totalMin + time;

        average = totalMin / games;

        if (time > 90 && time <= 120) {
            gameWithAddTime += 1;
        } else if (time > 120) {
            penalties += 1;
        }
    }


    console.log(`${team} has played ${totalMin} minutes. Average minutes per game: ${average.toFixed(2)}`);
    console.log(`Games with penalties: ${penalties}`);
    console.log(`Games with additional time: ${gameWithAddTime}`);
}   

gameInfo(['England', 3, 95, 115, 123]);