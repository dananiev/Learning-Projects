function phoneBook(input) {

    let arr = {};

    for (let i = 0; i < input.length; i += 1) {
        let [name, number] = input[i].split(' ');

        arr[name] = number;
    }

    for (let name in arr) {
        console.log(`${name} -> ${arr[name]}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);