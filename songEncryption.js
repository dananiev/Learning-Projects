const input = [
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
];

function validateArtist(artist) {
    const chars = artist.split('');
    let isValid = false;
    const isFirstCapitalLetter = chars[0] === chars[0].toUpperCase();

    if (!isFirstCapitalLetter) {
        return isValid;
    }

    const otherChars = artist.slice(1).split('');
    const areAllOtherLowerCase = otherChars.every(char => char === char.toLowerCase());

    if (!areAllOtherLowerCase) {
        return isValid;
    }

    isValid = true;
    return isValid;
}

function validateSong(song) {
    const chars = song.split('');
    const arrAllCharactersUpperCase = chars.every(char => char === char.toUpperCase());

    return arrAllCharactersUpperCase;
}

function encryptInfo(line, artist) {
    const key = artist.length;
    const chars = line.split('');
    const encrypted = [];

    for (const char of chars) {
        if (char === ':') {
            encrypted.push('@');
            continue;
        }

        if (char === ' ' || char === '\'') {
            encrypted.push(char);
        } else {
            const lowerZCode = 'z'.charCodeAt(0);
            const upperZCode = 'Z'.charCodeAt(0);
            const lowerACode = 'a'.charCodeAt(0);
            const upperACode = 'A'.charCodeAt(0);
            const currentCharCode = char.charCodeAt(0);

            let potentialCharCode = key + currentCharCode;

            if (char === char.toLowerCase() && potentialCharCode > lowerZCode) {
                potentialCharCode = (potentialCharCode - lowerZCode) + lowerACode - 1;
            } else if (char === char.toUpperCase() && potentialCharCode > upperZCode) {
                potentialCharCode = (potentialCharCode - upperZCode) + upperACode - 1;
            }

            const encryptedSymbol = String.fromCharCode(potentialCharCode);
            encrypted.push(encryptedSymbol);
        }
    }

    return encrypted.join('');
}

function processInput(input) {
    for (const line of input) {
        if (line === 'end') {
            break;
        }

        const [artist, song] = line.split(':');
        const trimmedArtist = artist.trim();
        const trimmedSong = song.trim();

        if (!validateArtist(trimmedArtist) || !validateSong(trimmedSong)) {
            console.log('Invalid input!');
        } else {
            const encryptedLine = encryptInfo(line, trimmedArtist);
            console.log(`Successful encryption: ${encryptedLine}`);           
        }
    }
}

processInput(input);