function solve(input) {

    let peshoFollowers = {};
    let like = 0;
    let comment = 0;

    for (let line of input) {

        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Log') {
            break;
        } 

        if (command === 'New') {
            let username = tokens[2];

            if (!peshoFollowers[username]) {
                peshoFollowers[username] = {
                    'likes': like,
                    'comments': comment
                };
            } 
        } else if (command === 'Like:') {
            let userName = tokens[1];
            let username = userName.replace(':', '');
            let count = Number(tokens[2]);
            if (!peshoFollowers[username]) {
                peshoFollowers[username] = {
                    'likes': like,
                    'comments': comment
                }
                peshoFollowers[username]['likes'] += count;
            } else if (peshoFollowers[username]) {
                peshoFollowers[username]['likes'] += count;
            }
        } else if (command === 'Comment:') {
            let username = tokens[1];

            if (!peshoFollowers[username]) {
                peshoFollowers[username] = {
                    'likes': like,
                    'comments': 1
                };
            } else {
                peshoFollowers[username]['comments'] += 1;
            }
        } else if (command === 'Blocked:') {
            let username = tokens[1];
            if (peshoFollowers[username]) {
                delete peshoFollowers[username];
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }
    }
    //console.log(peshoFollowers);

    let sortedUsers = Object.entries(peshoFollowers)
        .sort(sortUsernames);

    let count = Object.keys(peshoFollowers).length;
    console.log(`${count} followers`);
    for (let [ username, messages ] of sortedUsers) {
        let messagesCount = messages.likes + messages.comments;
        console.log(`${username}: ${messagesCount}`);
    }


    function sortUsernames(a, b) {
        let aLiked = a[1]['likes'];
        let bLiked = b[1]['likes'];

        let result = bLiked - aLiked;

        if (result === 0) {
            let aUsername = a[0];
            let bUsername = b[0];

            return aUsername.localeCompare(bUsername);
        }

        return result;
    }

}

solve(
   [ 'New follower: gosho',
     'Like: gosho: 5',
     'Comment: gosho',
     'New follower: gosho',
     'New follower: tosho',
     'Comment: gosho',
     'Comment: tosho',
     'Comment: pesho',
     'Log out' 
    ]
);

solve(
    [   'Like: A: 3',
        'Comment: A',
        'New follower: B',
        'Blocked: A',
        'Comment: B',
        'Like: C: 5',
        'Like: D: 5',
        'Log out'
         ]
);