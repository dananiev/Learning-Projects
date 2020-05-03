function solve(input) {

    let numbers = input.shift().split(' ').map(Number);

    for (let line of input) {

        if (line === 'End') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Complete') {
            let ind = +tokens[1];
            complete(ind);
        } else if (command === 'Change') {
            let inde = +tokens[1];
            let tim = +tokens[2];
            change(inde, tim);
        } else if (command === 'Drop') {
            let i = +tokens[1];
            drop(i);
        } else if (command === 'Count') {
            if (tokens[1] === 'Completed') {
                let countOfCompleted = completed(numbers);
                console.log(countOfCompleted);
            } else if (tokens[1] === 'Incomplete') {
                let countOfIncompleted = incompleted(numbers);
                console.log(countOfIncompleted);
            } else if (tokens[1] === 'Dropped') {
                let countOfDropped = dropped(numbers);
                console.log(countOfDropped);
            }
        }
    }

    let result = '';
    for (let i = 0; i < numbers.length; i += 1) {
        let currNum = numbers[i];

        if (currNum > 0) {
            result += currNum + ' ';
        }
    }

    console.log(result);

    function complete(index) {
        if (index >= 0 && index <= numbers.length) {
            numbers[index] = 0;
        } 
    }

    function change(index, time) {
        if (index >= 0 && index <= numbers.length) {
            numbers[index] = time;
        }
    }

    function drop(index) {
        if (index >= 0 && index <= numbers.length) {
            numbers[index] = -1;
        }
    }

    function completed(arr) {

        let countOfCompleted = 0;

       for (let i = 0; i < arr.length; i += 1) {
           if (arr[i] === 0) {
            countOfCompleted += 1;
           }
      }

       return countOfCompleted;
    }

    function incompleted(arr) {

        let countOfIncompleted = 0; 

       for (let i = 0; i < arr.length; i += 1) {
           if (arr[i] > 0) {
            countOfIncompleted += 1;
           }
       }

       return countOfIncompleted;
    }

    function dropped(arr) {

        let countOfDropped = 0;

        for (let num of arr) {
            if (num < 0) {
                countOfDropped += 1;
            }
        }

        return countOfDropped;
    }
}

solve(
    [ '1 2 3 4 5 4 0 3 2 1',
      'Complete 0',
      'Complete 1',
      'Complete 2',
      'Drop 3',
      'Change 4 1',
      'Count Completed',
      'End' ]
)