function sortAnArrayBy2Criteria(input) {

    input = input.sort(compareLength);

    function compareLength(a, b) {
        if (a.length < b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            return a.localeCompare(b);
        } else if (a.length > b.length) {
            return a.length - b.length;
        }
    }
    input.forEach(input => console.log(input));
}

sortAnArrayBy2Criteria(['alpha', 
    'beta',
    'gamma'
]);