function salary(input) {
    let n = +input.shift();
    let salary = +input.shift();

    for (let i = 0; i < n; i += 1) {
        let type = input.shift();

        switch (type) {
            case 'Facebook':
                salary = salary - 150;
                break;
            case 'Instagram':
                salary = salary - 100;
                break;
            case 'Reddit':
                salary = salary - 50;
                break;
        }
    }
    if (salary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(salary);
    }
}

salary([10, 750, 'Facebook', 'Dev.bg', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook']);