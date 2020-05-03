let companies = {name: 'Google', isBig: true, employee: 500};
let converted = JSON.stringify(companies);
console.log(converted);
let backWard = JSON.parse(converted);
console.log(backWard);