function journey(input) {
    let budget = +input.shift();
    let season = input.shift();

    let destination = '';
    let sum = 0;
    let way = '';

    if (budget <= 100) {
        destination = 'Bulgaria';

        if (season === 'summer') {
            sum = 0.30 * budget;
            way = 'Camp';
        } else if (season === 'winter') {
            sum = 0.70 * budget;
            way = 'Hotel';
        }

    } else if (budget <= 1000) {
        destination = 'Balkans';
        
        if (season === 'summer') {
            sum = 0.40 * budget;
            way = 'Camp';
        } else if (season === 'winter') {
            sum = 0.80 * budget;
            way = 'Hotel';
        }

    } else {
        destination = 'Europe';
        sum = 0.90 * budget;
        way = 'Hotel'
    }

    console.log('Somewhere in' + ' ' + destination);
    console.log(`${way} - ${sum.toFixed(2)}`);
}

journey([75, 'winter']);