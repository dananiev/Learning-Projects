// Memoization
// js object, keys will be arg to fn, value will be the return value
// const fib = (n, memo = {}) => {
//     if (n in memo) return memo[n]; 
//     if (n <= 2) return 1;
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// }
// console.log(fib(6));
// console.log(fib(50));


// const gridTraveler = (row, col, memo={}) => {
//     const key = `${row}, ${col}`;
//     if (key in memo) return memo[key];
//     if (row === 1 && col === 1) return 1;
//     if (row === 0 || col === 0) return 0;
//     memo[key] = gridTraveler(row - 1, col, memo) + gridTraveler(row, col - 1, memo);
//     return memo[key];
// }
// console.log(gridTraveler(3, 3)); 


// const canSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;
//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         if (canSum(remainder, numbers, memo) === true) {
//             memo[targetSum] = true;
//             return true;
//         }
//     }
//     memo[targetSum] = false;
//     return false;
// }
// console.log(canSum(7, [2, 4, 1]));


// const howSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;
//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbers, memo);
//         if (remainderResult !== null) {
//             memo[targetSum] = [ ...remainderResult, num];
//             return memo[targetSum];
//         }
//     }
//     memo[targetSum] = null;
//     return null;
// }
// console.log(howSum(7, [2, 5, 8])); 


// const bestSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;

//     for (let num of numbers) {
//         let reminder = targetSum - num;
//         let reminderCombination = bestSum(reminder, numbers, memo);
//         if (reminderCombination !== null) {
//             const combination = [ ...reminderCombination, num ];
//             if (shortestCombination === null || combination.length < shortestCombination.length) {
//                 shortestCombination = combination;
//             }
//         }
//     }
//     memo[targetSum] * shortestCombination;
//     return shortestCombination;
// }
// console.log(bestSum(8, [1, 4, 5]));


// const canConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];
//     if (target === '') return true;
//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             if (canConstruct(suffix, wordBank, memo) === true) {
//                 memo[target] = true;
//                 return true;
//             }
//         }
//     }
//     memo[target] = false;
//     return false;
// }
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));


// const countConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];
//     if (target === '') return 1;
//     let totalCount = 0;
//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
//             totalCount += numWaysForRest;
//         }
//     }
//     memo[target] = totalCount;
//     return memo[target];
// }
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));


// const allConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];
//     if (target === '') return [[]];
//     const result = [];
//     for (let word of wordBank) {
//         // check if there is a preffix
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank, memo);
//             const targetWays = suffixWays.map(way => [ word, ...way ]);
//             result.push(...targetWays);
//         }
//     }
//     memo[target] = result;
//     return result;
// }
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));


// const fib = (n) => {
//     const table = Array(n + 1).fill(0);
//     table[1] = 1;
//     for (let i = 0; i <= n; i++) {
//         table[i + 1] += table[i];
//         table[i + 2] += table[i];
//     }
//     return table[n];
// }
// console.log(fib(6));
// console.log(fib(8));
// 1 1 2 3 5 8 13 21 34 55 89
// 1 2 3 4 5 6 7  8  9  10 11


// const gridTraveler = (row, col) => {
//     const table = Array(row + 1).fill().map(() => Array(col + 1).fill(0));
//     table[1][1] = 1;
//     for (let i = 0; i <= row; i++) {
//         for (let j = 0; j <= col; j++) {
//             const current = table[i][j];
//             if (j + 1 <= col) table[i][j + 1] += current;
//             if (i + 1 <= row) table[i + 1][j] += current;
//         }
//     }
//     return table[row][col];
// }
// console.log(gridTraveler(3, 3));



// const canSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(false);
//     table[0] = true;
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] === true) {
//             for (let num of numbers) {
//                 table[i + num] = true;
//             }
//         }
//     }
//     return table[targetSum];
// }
// console.log(canSum(8, [2, 3, 5]));



// const howSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(null);
//     table[0] = 0;
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of numbers) {
//                 table[i + num] = [ ...table[i], num ];
//             }
//         }
//     }
//     return [table[targetSum]];
// }
// console.log(howSum(8, [2, 3, 5]));


// const bestSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(null);
//     table[0] = [];
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of numbers) {
//                 const combination = [ ...table[i], num ];
//                 if (!table[i + num] || table[i + num].length > combination.length) {
//                     table[i + num] = combination;
//                 }
//             }
//         }
//     }
//     return table[targetSum];
// }
// console.log(bestSum(7, [5, 3, 4, 7]));


// const canConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(false);
//     table[0] = true;
//     for (let i = 0; i <= target.length; i++) {
//         if (table[i] === true) {
//             for (let word of wordBank) {
//                 if (target.slice(i, i + word.length) === word) {
//                     table[i + word.length] = true;
//                 }
//             }
//         }
//     }

//     return table[target.length];
// }
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));


// const countConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(0);
//     table[0] = 1; 
//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 table[i + word.length] += table[i];
//             }
//         }
//     }
//     return table[target.length];
// }
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));


const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [ ...subArray, word ]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }

    return table[target.length];
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));