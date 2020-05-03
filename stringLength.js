function solve(one, two, three) {

    let firstWord = one.length;
    let secondWord = two.length;
    let thirdWord = three.length;

    let totalLength = firstWord + secondWord + thirdWord;

    let result = totalLength / 3;

    console.log(totalLength);
    console.log(Math.floor(result));

}   

solve('chocolate', 'ice cream', 'cake');