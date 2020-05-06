function solve(params) {

    let systems = new Map();

    for (const row of params) {
        let [name, component, subComponent] = row.split(' | ');

        if (!systems.get(name)) {
            systems.set(name, new Map());
        }

        let setOfSubcomponents = systems.get(name).get(component);

        if (!setOfSubcomponents) {
            systems.get(name).set(component, []);
            setOfSubcomponents = systems.get(name).get(component);
        }

        setOfSubcomponents.push(subComponent);
    }

    let ident = '|||';

    let sortSystems = (a, b) => (b[1].size - a[1].size !== 0) ? b[1].size - a[1].size
        : a[0] < b[0] ? -1
            : a[0] > b[0] ? 1
                : 0;

    let result = [...systems]
        .sort((a, b) => sortSystems(a, b))
        .map(sys => sys[0]
            + '\n' + [...sys[1]]
                .sort((a, b) => b[1].length - a[1].length)
                .map(c => ident + c[0] + '\n' + ident + ident + c[1].join('\n' + ident + ident))
                .join('\n')
        )
        .join('\n');

    console.log(result.trim());

}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
  ]);