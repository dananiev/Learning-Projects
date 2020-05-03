function building(input) {
    let floors = +input.shift();
    let rooms = +input.shift();

    for (floor = floors; floor >= 1; floor -= 1) {
        let output = '';
        for (let room = 0; room < rooms; room += 1) {
            if (floor === floors) {
                output += `L${floor}${room} `;
            } else if (floor % 2 == 0) {
                output += `O${floor}${room} `;
            } else {
                output += `A${floor}${room} `;
            }
        }
        console.log(output);
    }
}

building([6, 4]);