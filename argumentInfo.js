function solve(...input) {

    let typeCounts = {};

    for (let arg of input) {
        console.log(`${typeof(arg)}: ${arg}`);
        if (! typeCounts[typeof(arg)]) {
            typeCounts[typeof(arg)] = 1;
        } else {
            typeCounts[typeof(arg)] += 1;
        }
    }

    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a])
        .forEach(k => console.log(`${k} = ${typeCounts[k]}`));

}

solve(
    'cat', 42, function () { console.log('Hello world!'); }
);