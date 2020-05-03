function changeArray(source: string) {
    const [str, ...ops] = source.split('\n');
    let items = str.split(' ');
    ops.forEach(currentOp => {
        const [op, value, index = items.length] = currentOp.split(' ');
        if (op === 'Delete') {
            items = items.filter(i => i !== value);
        } else if (op === 'Insert') {
            items = [...items.slice(0, +index), value, ...items.slice(+index)];
        }
    });
    return items;
}

const result = changeArray('1 2 3 4 5 5 5 6\nDelete 5\nInsert 10 1\nDelete 5\nend');

console.log(result);