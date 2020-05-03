function JSONconverter(name, lastName, hairColor) {

    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(person));
}

JSONconverter('George', 'Jones', 'Brown');