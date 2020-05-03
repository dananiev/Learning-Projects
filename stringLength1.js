function solve(a, b, c) {
    let sum = a.length + b.length + c.length;
    let average = sum / 3;

    console.log(Math.floor(sum));
    console.log(Math.floor(average));

}


solve('chocolate', 'ice cream', 'cake');