function sort(items: number[], direction: 'asc' | 'desc' = 'asc') { 
    return items.sort((a, b) => {
        if (direction === 'asc') { 
            return a - b;
        }
        return b - a;
    });
}

const resultOne = sort([14, 7, 17, 6, 8]);
const resultTwo = sort([14, 7, 17, 6, 8], 'desc');

console.log(resultOne, resultTwo);