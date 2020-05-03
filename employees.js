function employees(input) {

    
    let personas = {
        nameOne : input.shift(),
        nameTwo : input.shift(),
        nameThree : input.shift(),
        nameFour : input.shift()
    };


    let names = Object.values(personas);

    for (let name of names) {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);