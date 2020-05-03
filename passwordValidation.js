function passwordValidation(password) {

    let isValid = true;
    let digits = 0;
    let isWithIncorrectElement = false;

    if (password.length < 6 && password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    password = password.toLowerCase();

    for (let index in password) {
        let asciElement = password.charCodeAt(index);

        if (asciElement < 48 || (asciElement > 57 && asciElement < 97) || asciElement > 122) {
            isWithIncorrectElement = true;
        }

        if (asciElement >= 48 && asciElement <= 57) {
            digits += 1;
        }
    }

    if (isWithIncorrectElement) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (digits < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidation('logIn');