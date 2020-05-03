function delet(words, index) {

    for (let line of words) {
        let tokens = line[0];
        let ind = line[1];

        let del = tokens.indexOf(ind + 1);
        console.log(del);
    }
    
    //if (words.includes(del)) {
        //words.replace(del, '');
    //}

    //console.log(words);
}

delet(['Congratulations you have past the final exam', 2]);