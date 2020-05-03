function chessBoard(num) {

    let size = num;
    let currentColour = 'black';
    let previousColour = '';

    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= size; rows += 1) {
        console.log('  <div>');

        for (let columns = 1; columns <= size; columns += 1) {
            console.log(`   <span class="${currentColour}"></span>`);

            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';
        }

        console.log('  </div>');
        if (size % 2 === 0) {
            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';
        }
    }
    console.log('</div>');
}

chessBoard(3);