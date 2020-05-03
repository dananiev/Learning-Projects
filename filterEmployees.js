function filterByProp(prop, value, element) {
    return element[prop] === value;
}

function parseFilter(filter) {
    return filter.split("-");
}

function formatResult(x, i) {
    return `${i}. ${x.first_name} - ${x.email}`;
}

function solve(data, filter) {
    return filter === 'all'
    ? JSON.parse(data)
        .map(formatResult)
        .join('\n')
    : JSON.parse(data)
        .filter(filterByProp.bind(undefined, ...parseFilter(filter)))
        .map(formatResult)
        .join('\n')
}

