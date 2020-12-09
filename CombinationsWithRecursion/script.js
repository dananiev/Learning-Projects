// const combinations = (elements) => {
//     if (elements.length === 0) return [ [] ];
//     const firstEl = elements[0];
//     const rest = elements.slice(1);
//     console.log(rest)
//     const combsWithoutFirst = combinations(rest);
//     console.log(combsWithoutFirst)
//     const combsWithFirst = [];
//     combsWithoutFirst.forEach((comb) => {
//         const combWithFirst = [ ...comb, firstEl ];
//         combsWithFirst.push(combWithFirst);
//     });
//     return [ ...combsWithoutFirst, ...combsWithFirst ]
// }
// console.log(combinations(['a', 'b', 'c']));



const permutations = (elements) => {
    if (elements.length === 0) return [ [] ];
    const firstEl = elements[0];
    const rest = elements.slice(1);

    const permsWithoutFirst = permutations(rest);

    const allPermutations = [];

    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [ ...perm.slice(0, i), firstEl, ...perm.slice(i) ];
            allPermutations.push(permWithFirst);
        }
    })

    return allPermutations;
}

console.log(permutations(['a', 'b', 'c']));
console.log(permutations([]));