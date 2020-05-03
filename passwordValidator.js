function passwordValidator(pass) {
    let isDigit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;

    let validLength = hasValidLength(); 
    let validContent = hasValidContent();
    let validDigit = hasAtLeastTwoDigits();

    if (!validLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!validContent) {
        console.log('Password must consist only of letters and digits');
    }

    if (!validDigit) {
        console.log('Password must have at least 2 digits');
    }

    if (validContent && validDigit && validLength) {
        console.log('Password is valid');
    }

    function hasValidLength() {
        return pass.length >= 6 && pass.length <= 10;
    }

    function hasValidContent() {
        let lowercasePass = pass.toLowerCase();
        let isLetter = (asciiCode) => asciiCode >= 97 && asciiCode <= 122;

        for (let i = 0; i < lowercasePass.length; i += 1) {
            let ascii = lowercasePass.charCodeAt(i);

            if (isLetter(ascii) === true || isDigit(ascii) === true) {
                continue;
            }
            return false;
        }
        return true;
    }

    function hasAtLeastTwoDigits() {

        let digitsCount = 0;

        for (let i = 0; i < pass.length; i += 1) {
            let ascii = pass.charCodeAt(i);

            let asciiIsDigit = isDigit(ascii);

            if (asciiIsDigit) {
                digitsCount += 1;
            }
        }

        return digitsCount >= 2;
    }

}

passwordValidator('logIn');