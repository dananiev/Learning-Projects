let myName = 'Kyle';

function printName() {
    //console.log(myName);
}

myName = 'Joey';
printName();


function outerFunction(outerVariable) {
    const outer = 'The Legend';
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
        console.log('Another Outer Variable: ' + outer);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');