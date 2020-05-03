function hotelRoom(input) {
    let month = input.shift();
    let nightsNumber = +input.shift();

    let priceStayStudio = 0;
    let priceStayApartment = 0;

    if (month === 'May' || month === 'October') {
        priceStayApartment = nightsNumber * 65;
        priceStayStudio = nightsNumber * 50;

        if (nightsNumber > 7 && nightsNumber <= 14) {
            priceStayStudio = nightsNumber * (50 * 0.95);
        } else if (nightsNumber > 14) {
            priceStayStudio = nightsNumber * (50 * 0.70);
        } 

        if (nightsNumber > 14) {
            priceStayApartment = nightsNumber * (65 * 0.90);
        }

    } else if (month === 'June' || month === 'September') {
        priceStayApartment = nightsNumber * 68.70;
        priceStayStudio = nightsNumber * 75.20;

        if (nightsNumber > 14) {
            priceStayApartment = nightsNumber * (68.70 * 0.90);
            priceStayStudio = nightsNumber * (75.20 * 0.80);
        }

    } else if (month === 'June' || month === 'August') {
        priceStayStudio = nightsNumber * 76;
        priceStayApartment = nightsNumber * 77;

        if (nightsNumber > 14) {
            priceStayApartment = nightsNumber * (77 * 0.90);
        }
    }
    console.log(`Apartment: ${priceStayApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStayStudio.toFixed(2)} lv.`);
}

hotelRoom(['June', 14]);