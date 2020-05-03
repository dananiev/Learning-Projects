function numberEndingIn7(input) {
    for (let i = 1; i <= 1000; i += 1) {
        let currentNum = i;
        if (currentNum % 10 === 7) {
            console.log(i);
        }
    }
}

numberEndingIn7([]);