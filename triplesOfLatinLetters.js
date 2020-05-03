function tripleOfLatinLetters(num) {

   for (let i1 = 0; i1 < num; i1 += 1) {
       for (let i2 = 0; i2 < num; i2 += 1) {
           for (let i3 = 0; i3 < num; i3 += 1) {
                let letterOne = String.fromCharCode(97 + i1);
                let letterTwo = String.fromCharCode(97 + i2);
                let letterThree = String.fromCharCode(97 + i3);
                console.log(`${letterOne}${letterTwo}${letterThree}`);
           }
       }
   }
}

tripleOfLatinLetters(3);