enum Operations {
    ADD,
    MULT,
    LARGEST
}

function operationExecutor(items: number[], op: Operations) { 
    return items.reduce((acc, currentvalue, index) => {
        if (op === Operations.LARGEST) {
            return acc < currentvalue ? currentvalue : acc
        }
        if (op === Operations.ADD) {
            return index === 0 ? currentvalue : acc + currentvalue
        }
        return index = 0 ? currentvalue : acc * currentvalue
    }, items[0]);
}

const resultAdd = operationExecutor([1, 2, 3], Operations.ADD);
const resultMult = operationExecutor([1, 2, 3], Operations.MULT);
const resultLargest = operationExecutor([1, 2, 3], Operations.LARGEST);

console.log(resultAdd, resultMult, resultLargest);