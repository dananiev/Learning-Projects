// function square(n) {
//     let result = 0;
//
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += 1;
//         }
//     }
//     return result;
// }
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
////////////////////////////////////////////////////////////////////////////////////////
// const prevValues = [];
//
// function square(n) {
//     if (prevValues[n] != null) return prevValues[n];
//
//     let result = 0;
//
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += 1;
//         }
//     }
//
//     prevValues[n] = result;
//     return result;
// }
//
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
////////////////////////////////////////////////////////////////////////////////////////
// function fibonacci(n) {
//     return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// console.log(fibonacci(40));
////////////////////////////////////////////////////////////////////////////////////////
function fibonacci(n, prevValues = []) {
    if (prevValues[n] != null) return prevValues[n];

    let result;
    if (n <= 2) {
        result = 1
    } else {
        result = fibonacci(n - 1, prevValues) + fibonacci(n - 2, prevValues);
    }
    
    prevValues[n] = result;
    return result;
}

console.log(fibonacci(300));