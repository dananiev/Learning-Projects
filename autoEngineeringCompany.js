function solve(params) {

    let stat = new Map();

    for (const row of params) {
        let [brand, model, coundAsString] = row.split(' | ');
        let producedCount = Number(coundAsString);

        if (! stat.get(brand)) {
            stat.set(brand, new Map().set(model, producedCount));
        } else if (!stat.get(brand).get(model)) {
            stat.get(brand).set(model, producedCount);
        } else {
            stat.set(brand, stat.get(brand).set(model, stat.get(brand).get(model) + producedCount));
        }
    }

    let result = [...stat]
        .map(b => b[0] + '\n' + [...b[1]
            .map(kvp => `###${kvp[0]} -> ${kvp[1]}`)
            .join('\n'))
        .join('\n');

    console.log(result);
}

solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
  ]);