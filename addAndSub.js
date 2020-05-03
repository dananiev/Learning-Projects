function solve(a, b, c) {
    let sum = (a, b) => a + b;
    let subtract = (result, c) => result - c;

    let result = sum(a, b);
    console.log(subtract(result, c));
}

solve(23, 6, 10);