// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const staff = [
    { name: 'bob', age: 30, position: 'developer', salary: 400 },
    { name: 'john', age: 28, position: 'designer', salary: 300 },
    { name: 'michael', age: 26, position: 'data analyst', salary: 200 },
    { name: 'george', age: 22, position: 'dish washer', salary: 100 }

]

const dailyTotal = staff.reduce((total, person) => {
    total += person.salary;
    return total
}, 0)

console.log(dailyTotal);