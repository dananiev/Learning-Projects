function solve(input) {

    let sizeOfASide = Number(input.shift());
    let numberOfSheetsOfPaper = Number(input.shift());
    let areaThatASingleSheetCover = Number(input.shift());

    let areaOfTheBox = sizeOfASide * sizeOfASide * 6;

    let areaToCoverPer = 0;
    let areaToCoverReal = 0;

    for (let i = 1; i <= numberOfSheetsOfPaper; i += 1) {

        if (i % 3 === 0) {
            let percent = 0.25 * areaThatASingleSheetCover;
            areaToCoverPer += percent;
        } else {
            areaToCoverReal += 1;
        }
    }

    let cmOne = areaToCoverReal * areaThatASingleSheetCover;
    let sumCm = cmOne + areaToCoverPer;

    let result = (sumCm / areaOfTheBox) * 100;
    console.log(`You can cover ${result.toFixed(2)}% of the box.`);
}

solve([ '2.5', '32', '4.25' ]);