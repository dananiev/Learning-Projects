let carObj = {
    brand: 'BMW',
    mileage: 20,
    getMileage: function() {
        console.log(this.mileage);
    }
}
carObj.getMileage();
// Output: 20



let anotherCarObj = {
    color: 'grey',
    age: 10,
    getAge: () => {
        console.log(this.age);
    }
}
anotherCarObj.getAge();
// Output: undefined