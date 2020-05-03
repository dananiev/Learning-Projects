function footballSouvenirs(input) {
    let team = input[0];
    let vidSuvenir = input[1];
    let suveniri = +input[2];
    let sum = 0;
    let isValid = true;

    if (team === 'Argentina') {
        switch(vidSuvenir) {
            case 'flags': sum = 3.25 * suveniri;
            break;
            case 'caps': sum = 7.20 * suveniri;
            break;
            case 'posters': sum = 5.10 * suveniri;
            break;
            case 'stickers': sum = 1.25 * suveniri;
            break;
            default:
                console.log('Invalid stock!');
                isValid = false;
            break;
        }
    } else if (team === 'Brazil') {
        switch(vidSuvenir) {
            case 'flags': sum = 4.20 * suveniri;
            break;
            case 'caps': sum = 8.50 * suveniri;
            break;
            case 'posters': sum = 5.35 * suveniri;
            break;
            case 'stickers': sum = 1.20 * suveniri;
            break;
            default:
                console.log('Invalid stock!');
                isValid = false;
            break;
        }
    } else if (team === 'Croatia') {
        switch(vidSuvenir) {
            case 'flags': sum = 2.75 * suveniri;
            break;
            case 'caps': sum = 6.90 * suveniri;
            break;
            case 'posters': sum = 4.95 * suveniri;
            break;
            case 'stickers': sum = 1.10 * suveniri;
            break;
            default:
                console.log('Invalid stock!');
                isValid = false;
            break;
        }
    } else if (team === 'Denmark') {
        switch(vidSuvenir) {
            case 'flags': sum = 3.10 * suveniri;
            break;
            case 'caps': sum = 6.50 * suveniri;
            break;
            case 'posters': sum = 4.80 * suveniri;
            break;
            case 'stickers': sum = 0.90 * suveniri;
            break;
            default:
                console.log('Invalid stock!');
                isValid = false;
            break;
        }
    } else {
        console.log('Invalid country!');
        isValid = false;
    }

    if (isValid) {
        console.log(`Pepi bought ${suveniri} ${vidSuvenir} of ${team} for ${sum.toFixed(2)} lv.`);
    }
}

footballSouvenirs(['Brazil', 'stickers', 5]);