// MAP Method
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const employees = [
    {
        name: 'robert',
        age: 20,
        position: 'developer'
    },
    {
        name: 'sally',
        age: 30,
        position: 'designer'
    },
    {
        name: 'david',
        age: 40,
        position: 'data analyst'
    }
]
console.log(employees);


const ages = employees.map((employee) => {
        return employee.age
    });
console.log(ages);


const newPeople = employees.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20,
        prevPosition: item.position.toUpperCase()
    }
})
console.log(newPeople);


const names = employees.map((employee) => `<h3>${employee.name}</h3>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');