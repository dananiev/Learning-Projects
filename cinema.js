function cinema(input) {
    let projection = input.shift();
    let row = +input.shift();
    let col = +input.shift();
    let sits = 0;
    let sum = 0;

    let premiereProjection = 12.00;
    let standartProjection = 7.50;
    let projectionForKids = 5.00;

    if (projection === 'Premiere') {
        sits = row * col;
        sum = sits * premiereProjection;
        console.log(sum.toFixed(2) + ' ' + 'leva');
    } else if (projection === 'Normal') {
        sits = row * col;
        sum = sits * standartProjection;
        console.log(sum.toFixed(2) + ' ' + 'leva');
    } else if (projection === 'Discount') {
        sits = row * col;
        sum = sits * projectionForKids;
        console.log(sum.toFixed(2) + ' ' + 'leva');
    }
}

cinema(['Premiere', 10, 12]);