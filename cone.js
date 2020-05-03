function cone(rad, heig) {

    let radius = rad;
    let height = heig;

    let pi = Math.PI;
    let kvadraten = radius * radius;
    let volume = (pi * kvadraten * height) / 3;

    let koren = height * height;
    let sumHeightRadius = koren + kvadraten;
    let korenkvadraten = Math.sqrt(sumHeightRadius) + radius;
    let area = korenkvadraten * pi * radius;
    
    console.log('volume = ' + volume.toFixed(4));
    console.log('area = ' + area.toFixed(4));
}

cone(3, 5);