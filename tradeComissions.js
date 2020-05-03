function tradeComissions(input) {
    let city = (input.shift()).toLowerCase();
    let sales = +input.shift();

    let comission = -1;

    if (city === 'sofia') {
        if (sales >= 0 && sales <= 500) {
            comission = sales * 0.05;
        } else if (sales >= 500 && sales <= 1000) {
            comission = sales * 0.07;
        } else if (sales >= 1000 && sales <= 10000) {
            comission = sales * 0.08; 
        } else if (sales > 10000) {
            comission = sales * 0.12; 
        }
    } else if (city === 'varna') {
        if (sales >= 0 && sales <= 500) {
            comission = sales * 0.045;
        } else if (sales >= 500 && sales <= 1000) {
            comission = sales * 0.075;
        } else if (sales >= 1000 && sales <= 10000) {
            comission = sales * 0.10; 
        } else if (sales > 10000) {
            comission = sales * 0.13; 
        }
    } else if (city === 'plovdiv') {
        if (sales >= 0 && sales <= 500) {
            comission = sales * 0.055;
        } else if (sales >= 500 && sales <= 1000) {
            comission = sales * 0.08;
        } else if (sales >= 1000 && sales <= 10000) {
            comission = sales * 0.12; 
        } else if (sales > 10000) {
            comission = sales * 0.145; 
        } else if (sales < 0) {
            console.log('error');
        }
    } else if (!(city === 'sofia' || city === 'varna' || city === 'plovdiv')) {
        console.log('error');
    }

    if (comission > 0) {
        console.log(`${comission.toFixed(2)}`);
    }
}

tradeComissions(['Plovdiv', -20]);