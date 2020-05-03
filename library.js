function oldBooks(input) {
    let bookName = input.shift();
    let libraryCapacity = +input.shift();
    let checkBooks = 0;

    while (true) {
        let currentBook = input.shift();
        checkBooks += 1;
        if (currentBook === bookName) {
            checkBooks -= 1;
            console.log(`You checked ${checkBooks} books and found it.`);
            break;
        } else if (libraryCapacity === checkBooks) {
            checkBooks -= 1;
            console.log('The book you search is not here!');
            console.log(`You checked ${libraryCapacity} books.`);
            break;
        }
    }
}

oldBooks(['Troy', 8, 'Stronger', 'Life Style', 'Troy']);