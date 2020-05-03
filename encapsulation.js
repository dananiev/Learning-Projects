let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

let result = getWage(30000, 10, 20);
console.log(result);


// OOP example of the above code (encapsulation):
let employee = {
    baseSalary: 40000,
    overtime: 20,
    rate: 30,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
//employee.getWage();
console.log(employee.getWage());