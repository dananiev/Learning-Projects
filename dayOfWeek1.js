function solve(input) {

    if (input === 'Monday') {
        return 1;
    }
    if (input === 'Tuesday') {
        return 2;
    }
    if (input === 'Wednesday') {
        return 3;
    }
    if (input === 'Thrusday') {
        return 4;
    }
    if (input === 'Friday') {
        return 5;
    }
    if (input === 'Saturday') {
        return 6;
    }
    if (input === 'Sunday') {
        return 7;
    }
    return 'error';
}

solve('Monday');