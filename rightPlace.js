function solve(str, symbol, string) {
    let res = str.replace('_', symbol);
    let output = res;
    if (output === string) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'i', 'String');