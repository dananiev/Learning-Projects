const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//////////////////// forEach ////////////////////

// for (i = 0; i < companies.length; i += 1) {
//     console.log(companies[i]);
// }

// companies.forEach(company => {
//     console.log(company.start);
// });

// let thoseCanDrink = [];
// for (i = 0; i < ages.length; i += 1) {
//     if (ages[i] >= 21) thoseCanDrink.push(ages[i]);
// }
// console.log(thoseCanDrink);

// let canDrink = [];
// ages.forEach(age => {
//     if (age >= 21) canDrink.push(age);
// });
// console.log(canDrink);



//////////////////// filter ////////////////////

// const canDrink = ages.filter(age => {
//     if(age >= 21) return true;
// });
// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(company => company.start <= 1989 && company.start >= 1980);
// console.log(eightiesCompanies);

// const companiesLastedTenYears = companies.filter(company => company.end - company.start >= 10);
// console.log(companiesLastedTenYears);



//////////////////// map ////////////////////

// const companyNames = companies.map(company => {
//     return company.name;
// });
// console.log(companyNames);

// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const testMap = companies.map(company => {
//     return `${company.name} has been functioning during [${company.start} to ${company.end}] years`;
// });
// console.log(testMap);

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// const ageMultipliedByTwo = ages.map(age => age * 2);
// console.log(ageMultipliedByTwo);



//////////////////// sort ////////////////////

// const sortedYears = companies.sort((c1, c2) => {
//     return c1.start > c2.start ? 1 : -1;
// });
// console.log(sortedYears);

// const sortedYears = companies.sort((company1, company2) => company1.start > company2.start ? 1 : -1);
// console.log(sortedYears);

// const sortAges = ages.sort();
// console.log(sortAges);

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// const sortAges = ages.sort((a, b) => b - a);
// console.log(sortAges);



//////////////////// reduce ////////////////////

// const ageSum = ages.reduce((a, b) => a + b, 0);
// console.log(ageSum);

// const totalYears = companies.reduce((sum, company) => sum + (company.end - company.start), 0);
// console.log(totalYears);


//////////////////// combine methods ////////////////////

const combined = ages
    .map(age => age * 2)
    .filter(age => age <= 50)
    .sort((a, b) => a - b)
    .reduce((total, num) => total + num, 0); 

console.log(combined);
