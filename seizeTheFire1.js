function solve(input) {

    let fires = input.shift().split('#');
    
    let water = Number(input);
    let totalEffort = 0;
    let totalFire = 0;
    let validCells = [];

    for (let i = 0; i < fires.length; i += 1) {
        let currentPair = fires[i];
        let currentPairSeparated = currentPair.split(' = ');
        let typeOfFire = currentPairSeparated[0];
        let cellValue = Number(currentPairSeparated[1]);

        let isValid = isFireValid(typeOfFire, cellValue);

        if (isValid && water >= cellValue) {
            water -= cellValue;
            totalEffort += 0.25 * cellValue;
            totalFire += cellValue;
            validCells.push(cellValue);
        }
    }

    console.log('Cells:');
    if (validCells.length > 0) {
        let outputCells = validCells.map((cell) => ` - ${cell}`).join('\n');
        console.log(outputCells);
    }

    console.log(`Effort: ${totalEffort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);
    

    function isFireValid(type, value) {

        if (type === 'High' && value >= 81 && value <= 125) {
            return true;
        }

        if (type === 'Medium' && value >= 51 && value <= 80) {
            return true;
        }

        if (type === 'Low' && value >= 1 && value <= 50) {
            return true;
        }

        return false;
    } 
}

solve([ 'High = 89#Low = 28#Medium = 77#Low = 23', '1250' ]);