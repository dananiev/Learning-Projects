let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i += 1) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'cyan';
}