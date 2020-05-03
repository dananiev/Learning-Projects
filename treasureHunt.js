function solve(input) {

    let loot = input.shift().split('|');

    for (let line of input) {

        if (line === 'Yohoho!') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        if (command === 'Loot') {
            for (let i = 0; i < tokens.length; i += 1) {
                let curEl = tokens[i];
                if (!loot.includes(curEl)) {
                    loot.unshift(curEl);
                }
            }
        } else if (command === 'Drop') {
            let ind = +tokens[0];

            if (ind >= 0 && ind <= loot.length) {
                let rem = loot.splice(ind, 1).join('');
                loot.push(rem);
            }
        } else if (command === 'Steal') {
            let count = +tokens[0];
            let start = tokens.length - 1 - count;
            let lastThreeItems = loot.slice(start);
            console.log(lastThreeItems.join(', '));
            loot.splice(start, count);
        }

    }

    let currentEl = 0;
    for (let i = 0; i < loot.length; i += 1) {
        currentEl += loot[i];
    }
    let countOfItems = loot.length;
    let allSymbols = currentEl.length - 1;
    let result = allSymbols / countOfItems;

    if (loot.length > 0) {
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
    } else if (loot.length <= 0) {
        console.log(`Failed treasure hunt.`);
    }
}

solve(
    [ 'Gold|Silver|Bronze|Medallion|Cup',
      'Loot Wood Gold Coins',
      'Loot Silver Pistol',
      'Drop 3',
      'Steal 3',
      'Yohoho!' ]
);