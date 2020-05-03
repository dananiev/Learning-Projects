function ticketCombination(input) {
    let n = +input.shift();

    let count = 0;

    for (let i = 66; i <= 76; i += 2) {
        for (let j = 102; j >= 97; j -= 1) {
            for (let k = 65; k <= 67; k += 1) {
                for (let m = 1; m <= 10; m += 1) {
                    for (let l = 10; l >= 1; l -= 1) {
                        count += 1;
                        if (count === n) {
                            let combination = `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}${m}${l}`;
                            let prize = i + j + k + m + l;
                            console.log(`Ticket combination: ${combination}`);
                            console.log(`Prize: ${prize} lv.`);
                        }
                    }
                }
            }
        }
    }
}

ticketCombination([17]);