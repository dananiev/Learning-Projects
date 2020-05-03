function solve(params) {

    let sanitizeInput = str => str
        .replace(/&/g, '&amp')
        .replace(/</g, '&lt')
        .replace(/>/g, '&gt')
        .replace(/"/g, '&quot')
        .replace(/'/g, '&#39');

    let ident = '\t';
    let html = '<table>\n';

    for (const jsonEmp of params) {
        let empData = JSON.parse(jsonEmp);
        html += `${ident}<tr>\n`;

        html += `${ident}${ident}<td>${sanitizeInput(empData.name)}</td>\n`;
        html += `${ident}${ident}<td>${sanitizeInput(empData.position)}</td>\n`;

        let salary = Number.isFinite(empData.salary)
            ? Number(empData.salary)
            : sanitizeInput(empData.salary);

            html += `${ident}${ident}<td>${salary}</td>\n`;
            html += `${ident}</tr>\n`;
    }

    html += '</table>';
    return html;
}

console.log(solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
  ]));