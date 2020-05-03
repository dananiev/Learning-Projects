function danceHall(input) {
    let length = +input.shift();
    let width = +input.shift();
    let a = +input.shift();

    let areaRoom = (length * 100) * (width * 100);
    let wardrobe = (a * 100) * (a * 100);
    let bench = areaRoom / 10;

    let freeArea = areaRoom - (wardrobe + bench);
    
    let dancers = freeArea / (40 + 7000);
    console.log(Math.floor(dancers));

}

danceHall([50, 25, 2]);