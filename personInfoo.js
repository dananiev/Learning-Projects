function personalInfo(firstName, lastName, age) {

    const person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    let entries = Object.entries(person);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }

}

personalInfo('Peter', 'Pan', '20');