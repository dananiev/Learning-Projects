function contactList(input) {

    let contacts = input.shift().split(' ');
    
    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];
        
        if (command === 'Add') {
            let index = +tokens[2];
            
            if (contacts.includes(tokens[1]) && index <= contacts.length && index >= 0) {
                contacts.splice(index, 0, tokens[1]);
            } else {
                contacts.push(tokens[1]);
            }
        } else if (command === 'Remove') {
            let index = +tokens[1];

            if (index <= contacts.length && index >= 0) {
                contacts.splice(index, 1);
            }
        } else if (command === 'Export') {
            let startIndex = +tokens[1];
            let count = +tokens[2];
            let firstExport = contacts.slice(startIndex, count);
            console.log(firstExport.join(' '));
        } else if (command === 'Print') {
            let word = tokens[1];

            if (word === 'Normal') {
                contacts = contacts;
            } else if (word === 'Reversed') {
                contacts = contacts.reverse();
            }
        }
    }

    console.log(`Contacts: ${contacts.join(' ')}`);
}

contactList(
    [ 'Zayn Katy Ariana Avril Nick Mikolas',
      'Remove 3',
      'Add Jacob 0',
      'Export 0 3',
      'Export 3 8',
      'Print Reversed' ]
);