function easterGifts(input) {

    let plannedGifts = input.shift().split(' ');

    for (let i = 0; i < input.length; i += 1) {
        let currentNote = input[i].split(' ');
        let command = currentNote[0];

        switch(command) {
            case 'OutOfStock':
                let selectedGift = currentNote[1];
                if (plannedGifts.includes(selectedGift)) {
                    for (let j = 0; j < plannedGifts.length; j += 1) {
                        plannedGifts[plannedGifts.indexOf(selectedGift)] = 'None';
                    }
                }
                break;

            case 'Required':
                let requiredGift = currentNote[1];
                let requiredIndex = currentNote[2];
                if (requiredIndex >= 0 && requiredIndex <= plannedGifts.length) {
                    plannedGifts[requiredIndex] = requiredGift;
                }
                break;

            case 'JustInCase':
                let inCaseGift = currentNote[1];
                plannedGifts.pop();
                plannedGifts.push(inCaseGift);
                break;
            case 'No Money':
                break;
        }
    }


    plannedGifts = plannedGifts.filter((val) => val !== 'None');
    //for (let singleGift of plannedGifts) {
        //if (singleGift === 'None') {
            //let giftIndex = plannedGifts.indexOf(singleGift);
            //if (giftIndex < plannedGifts.length) {
                //plannedGifts.splice(giftIndex, 1);
            //}
        //}
    //}

    console.log(plannedGifts.join(' '));
}

easterGifts([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
'OutOfStock Eggs',
'Required Spoon 2',
'JustInCase ChocolateEgg',
'No Money' ]);