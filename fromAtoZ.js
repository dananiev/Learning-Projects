function fromAtoZ(input) {
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i += 1) {
        console.log(String.fromCharCode(i));
    }
}

fromAtoZ(['a']);