"use strict";
var Operations;
(function (Operations) {
    Operations[Operations["ADD"] = 0] = "ADD";
    Operations[Operations["MULT"] = 1] = "MULT";
    Operations[Operations["LARGEST"] = 2] = "LARGEST";
})(Operations || (Operations = {}));
function operationExecutor(items, op) {
    return items.reduce((acc, currentvalue, index) => {
        if (op === Operations.LARGEST) {
            return acc < currentvalue ? currentvalue : acc;
        }
        if (op === Operations.ADD) {
            return index === 0 ? currentvalue : acc + currentvalue;
        }
        return index === 0 ? currentvalue : acc * currentvalue;
    }, items[0]);
}
const resultAdd = operationExecutor([1, 2, 3, 4], Operations.ADD);
const resultMult = operationExecutor([1, 2, 3, 4], Operations.MULT);
const resultLargest = operationExecutor([1, 2, 3, 4], Operations.LARGEST);

console.log(resultAdd, resultMult, resultLargest);
