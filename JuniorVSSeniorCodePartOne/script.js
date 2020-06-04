////////////////////////////////////////////////////////////// LOGIC
////////////////////////////////////////////////////////////// NOOB - BEGINNER CODE
// function toAccounting(n) {
//     if (n < 0) {
//         return '(' + Math.abs(n) + ')'
//     } else if (n >= 0) {
//         return n.toString()
//     }
// }
//
// console.log(toAccounting(0));
// console.log(toAccounting(10));
// console.log(toAccounting(-5));
// console.log(toAccounting(undefined));
////////////////////////////////////////////////////////////// ADVANCED CODE
// function numberToAccountingString(number) {
//     if (number != null) {
//         if (number < 0) {
//             return `(${Math.abs(number)})`
//         } else if (number >= 0) {
//             return number.toString()
//         }
//     }
// }
//
// console.log(numberToAccountingString(undefined));
// console.log(numberToAccountingString(0));
// console.log(numberToAccountingString(10));
// console.log(numberToAccountingString(-5));
////////////////////////////////////////////////////////////// PROFFESIONAL CODE
// function numberToAccountingString(number) {
//     if (number == null) return
//     if (number < 0) return `(${Math.abs(number)})`
//     return number.toString()
// }
//
// console.log(numberToAccountingString(undefined));
// console.log(numberToAccountingString(0));
// console.log(numberToAccountingString(10));
// console.log(numberToAccountingString(-5));
////////////////////////////////////////////////////////////// VARIABLE MANIPULATION
////////////////////////////////////////////////////////////// NOOB - BEGINNER CODE
// function calculateTotal(items, options) {
//     let t = 0;
//     items.forEach(i => {
//         t += i.price * i.quan
//     });
//     // console.log(t);
//
//     t = t - t * (options.dis || 0)
//     t = t * 1.1
//     t = t + (options.ship || 5) // if (0 || някакво число) - винаги връща числото 
//     return t
// }
//
// const testItems = [
//     { price: 15, quan: 2 },
//     { price: 20, quan: 1 },
//     { price: 5, quan: 4 }
// ];
//
// console.log(calculateTotal([], {}));
// console.log(calculateTotal(testItems, {}));
// console.log(calculateTotal(testItems, { ship: 0 }));
// console.log(calculateTotal(testItems, { dis: .75 }));
// console.log(calculateTotal(testItems, { ship: 12 }));
////////////////////////////////////////////////////////////// ADVANCED CODE
// const TAX_RATE = 1.1;
// const SHIPPING_DEFAULT = 5;
//
// function calculateTotal(items, options = {}) {
//     if (items == null || items.length === 0) return 0
//
//     let total = 0;
//     items.forEach(item => {
//         total += item.price * item.quantity
//     });
//
//     total = total - total * (options.discount || 0);
//     total = total * TAX_RATE;
//     if (options.shipping !== 0) {
//         total = total + (options.shipping || SHIPPING_DEFAULT)
//     }
//     return total
// }
//
// const testItems = [
//     { price: 15, quantity: 2 },
//     { price: 20, quantity: 1 },
//     { price: 5, quantity: 4 }
// ];
//
// console.log(calculateTotal());
// console.log(calculateTotal(testItems));
// console.log(calculateTotal(undefined, {}));
// console.log(calculateTotal([], {}));
// console.log(calculateTotal(testItems, {}));
// console.log(calculateTotal(testItems, { shipping: 0 }));
// console.log(calculateTotal(testItems, { discount: .75 }));
// console.log(calculateTotal(testItems, { shipping: 12 }));
////////////////////////////////////////////////////////////// PROFFESIONAL CODE
const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 5;

function calculateTotal(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
    if (items == null || items.length === 0) return 0

    const itemCost = items.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0);

    const discountRate = 1 - discount;

    return itemCost * discountRate * TAX_RATE + shipping
}

const testItems = [
    { price: 15, quantity: 2 },
    { price: 20, quantity: 1 },
    { price: 5, quantity: 4 }
];

console.log(calculateTotal());
console.log(calculateTotal(testItems));
console.log(calculateTotal(undefined, {}));
console.log(calculateTotal([], {}));
console.log(calculateTotal(testItems, {}));
console.log(calculateTotal(testItems, { shipping: 0 }));
console.log(calculateTotal(testItems, { discount: .75 }));
console.log(calculateTotal(testItems, { shipping: 12 }));
////////////////////////////////////////////////////////////// GUARD CLAUSES
// function startTimer(timer) {
//     if (timer.enabled) {
//         timer.time = 0;
//         timer.start()
//     }
// }
//
// function startTimer(timer) {
//     if (!timer.enabled) return
//
//     timer.time = 0;
//     timer.start()
// }
//
// function getInsuranceDeductible(insurance) {
//     if (insurance.covered) {
//         if (insurance.majorRepair) {
//             return 500
//         } else if (insurance.middleRepair) {
//             return 300
//         } else {
//             return 100
//         }
//     } else {
//         return 0
//     }
// }
//
// function getInsuranceDeductible(insurance) {
//     if (!insurance.covered) return 0
//     if (insurance.majorRepair) return 500
//     if (insurance.middleRepair) return 300
//
//     return 100
// }
//
//
//
// function priceForRepair(number) {
//     if (!number === 100) return 50
//     if (number === 80) return 80
//     if (number === 60) return 60
//
//     return 0
// }
//
// console.log(priceForRepair(100));
