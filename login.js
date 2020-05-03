function login(array) {
    let validPassword = array.reverse();
    let failAttempts = 0;
    let user = array[4];
    let pass = array;

    do {
        if (pass !== validPassword) {
            failAttempts += 1;
            if (failAttempts === 4) {
                console.log(`User ${user} blocked!`);
                return;
            } else {
                console.log('Incorrect password. Try again.');
            }
        } else {
            console.log(`User ${user} logged in.`);
            return;
        }
    } while (failAttempts < 5);
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);