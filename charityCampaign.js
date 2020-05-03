function charityCampaign(input) {
    let days = +input.shift();
    let sladkari = +input.shift();
    let broiTorti = +input.shift();
    let broiGofreti = +input.shift();
    let broiPalachinki = +input.shift();

    let cenaTorti = broiTorti * 45;
    let cenaGofreti = broiGofreti * 5.80;
    let cenaPalachinki = broiPalachinki * 3.20;

    let sumaZaEdinDen = (cenaTorti + cenaGofreti + cenaPalachinki) * sladkari;
    let obshtaSuma = days * sumaZaEdinDen;
    let sumaZaProdukti = obshtaSuma / 8;
    let sum = obshtaSuma - sumaZaProdukti;
    console.log(sum.toFixed(2));
}

charityCampaign([20, 8, 14, 30, 16]);