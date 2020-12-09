// iterative solution
// let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];
// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;   
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (target === array[mid]) {
//             return mid;
//         } else if (target < array[mid]) {
//             right = mid - 1
//         } else if (target > array[mid]) {
//             left = mid + 1;
//         }
//     }
//     return false;
// }
// console.log(binarySearch(nums, 7));


// recursive solution
// let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];
// function binarySearch(array, target) {
//     return binarySearchHelper(array, target, 0, array.length - 1);
// }
// function binarySearchHelper(array, target, left, right) {
//     if (left > right) {
//         return false;
//     }  
//     let mid = Math.floor((left + right) / 2);
//     if (target === array[mid]) {
//         return mid;
//     } else if (target < array[mid]) {
//         return binarySearchHelper(array, target, left, mid - 1);
//     } else if (target > array[mid]) {
//         return binarySearchHelper(array, target, mid + 1, right);
//     }
//     return false;
// }
// console.log(binarySearch(nums, 7));
// console.log(binarySearch(nums, 10));



const slow = (array) => {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const currentEl = array[i];
        if (!newArray.includes(currentEl)) {
            newArray.push(currentEl);
        }
    }

    return newArray;
}

const fast = (array) => {
    const newArray = new Set();

    for (let i = 0; i < array.length; i++) {
        const currentEl = array[i];
        newArray.add(currentEl);
    }

    return Array.from(newArray);
}

const randomArray = [];
for (let i = 0; i < 100; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    randomArray.push(randomNumber);
}

console.log(randomArray);


const startSlow = new Date();
console.log(slow(randomArray));
const endSlow = new Date();
console.log(`slow n*2 finished in ${endSlow - startSlow} ms`);

const startFast = new Date();
console.log(fast(randomArray));
const endFast = new Date();
console.log(`fast n finished in ${endFast - startFast} ms`)