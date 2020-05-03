function solve(input) {

    let users = {};
    let capacity = input.shift();

    for (let line of input) {
        if (line === 'Statistics') {
            break;
        }

        let arr = line.split('=');
        let command = arr.shift();

        if (command === 'Add') {
            let username = arr[0];
            let sent = arr[1];
            let received = arr[2];
            addUsername(username, sent, received);
        } else if (command === 'Message') {
            let sender = arr[0];
            let receiver = arr[1];
            increaseMessages(sender, receiver);
        } else {
            let username = line[0];
            del(username);
        }
    }

    function addUsername(username, sent, received) {
        sent = Number(sent);
        received = Number(received);

        if (!users.hasOwnProperty(username)) {
            users[username] = username;
            users[sent] = sent;
            users[received] = received;
        }
    }

    function increaseMessages(sender, receiver) {

        if (users.hasOwnProperty(sender)) {
            users[sender] =+ 1;
        }

        if (users[sender] === capacity) {
            console.log(`${sender} reached the capacity!`);
            delete users[sender];
        }

        if (users[receiver] === capacity) {
            console.log(`${receiver} reached the capacity!`);
            delete users[receiver];
        }
    }

    function del(username) {
        if (username !== 'All' && users.hasOwnProperty(username)) {
            delete users[username];
        } else if (username === 'All'){
            for (let user in users) {
                delete users[user];
            } 
        }
    }



}

solve(
    [ 10,
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics' ]
);