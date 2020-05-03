function solve(input) {

    let users = {};
    let capacity = input.shift();

    for (let line of input) {

        let tokens = line.split('=');
        let command = tokens.shift();

        if (command === 'Statistics') {
            break;
        } 

        if (command === 'Add') {
            let username = tokens[0];
            let sent = Number(tokens[1]);
            let received = Number(tokens[2]);

            if (!users[username]) {
                users[username] = {
                    sent: sent,
                    received: received
                };
            } //else {
            //users[username]['health'] += health;
            //}

            //command 'Attack' -> users[defenderName]['health'] -= damage;
        } else if (command === 'Message') {
            let sender = tokens[0];
            let receiver = tokens[1];
            if (users[sender] && users[receiver]) {
                users[sender]['sent'] += 1;
                users[receiver]['received'] += 1;
            }

            let senderTotalMessages = users[sender]['sent'] + users[sender]['received'];
            if (senderTotalMessages === capacity) {
                console.log(`${sender} reached the capacity!`);
                delete users[sender];
            }
            let receiverTotalMessages = users[receiver]['sent'] + users[receiver]['received'];
            if (receiverTotalMessages === capacity) {
                console.log(`${receiver} reached the capacity!`);
                delete users[receiver];
            }
        } else if (command === 'Empty') {
            let username = tokens[0];
            if (username !== 'All' && users[username]) {
                delete users[username];
             } else if (username === 'All'){
                for (let user in users) {
                    delete users[user];
                } 
             }
        }
    }

    let sortedUsers = Object.entries(users)
        .sort(sortUsernames);

    let count = Object.keys(users).length;
    console.log(`Users count: ${count}`);
    for (let [ username, messages ] of sortedUsers) {
        let messagesCount = messages.sent + messages.received;
        console.log(`${username} - ${messagesCount}`);
    }


    function sortUsernames(a, b) {
        let aReceived = a[1]['received'];
        let bReceived = b[1]['received'];

        let result = bReceived - aReceived;

        if (result === 0) {
            let aUsername = a[0];
            let bUsername = b[0];

            return aUsername.localeCompare(bUsername);
        }

        return result;
    }
}

solve(
    [ 12,
        'Add=Bonnie=3=5',
        'Add=Johny=4=4',
        'Empty=All',
        'Add=Bonnie=3=3',
        'Statistics'
         ]
);