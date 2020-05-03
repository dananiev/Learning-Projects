function solve(input) {

    let numbers = input.shift().split(' ').map(Number);
    
    for (let line of input) {
        
        if (line === 'End') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Switch') {
            let ind = +tokens[1];
            switchSign(ind);
        } else if (command === 'Change') {
            let inde = +tokens[1];
            let val = +tokens[2];

            change(inde, val);
        } else if (command === 'Sum') {
            if (tokens[1] === 'Negative') {
                let sumNegative = negative(numbers);
                console.log(sumNegative);
            } else if (tokens[1] === 'Positive') {
                let sumPositive = positive(numbers);
                console.log(sumPositive);
            } else if (tokens[1] === 'All') {
                let sumAllNumbers = sumAll(numbers);
                console.log(sumAllNumbers);
            }
        }
    }

    let result = '';
    for (let i = 0; i < numbers.length; i += 1) {
        let currNum = numbers[i];

        if (currNum >= 0) {
            result += currNum + ' ';
        }
    }

    console.log(result);

    function switchSign(index) {
        if (index >= 0 && index <= numbers.length) {
            numbers[index] = - numbers[index];
        } 
    }

    function change(index, value) {
        if (index >= 0 && index <= numbers.length) {
            numbers[index] = value;
        }
    }

    function negative(arr) {

        let sumNegative = 0; 

       for (let i = 0; i < arr.length; i += 1) {
           if (arr[i] < 0) {
               sumNegative += arr[i];
           }
       }

       return sumNegative;
    }

    function positive(arr) {

        let sumPositive = 0;

       for (let i = 0; i < arr.length; i += 1) {
           if (arr[i] >= 0) {
               sumPositive += arr[i];
           }
      }

       return sumPositive;
    }

    function sumAll(arr) {
        let sumAllNumbers = 0;

        for (let num of arr) {
            sumAllNumbers += num;
        }

        return sumAllNumbers;
    }
    
}

solve([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ]);