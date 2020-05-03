function triangleAreaSU(a, b, c) {

    let sideA = a;
    let sideB = b;
    let sideC = c;
   
    let semiParameter = (sideA + sideB + sideC) / 2;

    let area = semiParameter * ((semiParameter - sideA) * (semiParameter - sideB) * (semiParameter - sideC));

    console.log(Math.sqrt(area));
}

triangleAreaSU(2, 3.5, 4);