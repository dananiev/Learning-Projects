function solve([input]) {

    let wordsArr = input.split(/\W+/).filter(w => w !== "");
    let obj = {};

    for (let word of wordsArr) {
        if (! obj.hasOwnProperty(word)) {
            obj[word] = 1;
        } else {
            obj[word] += 1;
        }
    }

    console.log(JSON.stringify(obj));

}

solve(["Far too slow, you're far too slow."]);