console.log('Start');

function logInUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data');
            resolve({ userEmail: email });
        }, 1000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('title of the video');
        }, 3000);
    });
}

logInUser('deyan', 'Sen')
    .then(user => getUserVideos(user.email))
    .then(videos => videoDetails(videos[0]))
    .then(detail => console.log(detail));

async function displayUser() {
    try {
        const loggedUser = await logInUser('did', 1234);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
    } catch (err) {
        console.log('error');
    }
}

displayUser();

// console.log('Finish');

// const youtube = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('videos from youtube');
//         resolve({ videos: [1, 2, 3, 4, 5] });
//     }, 2000);
// });

// const facebook = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('users from facebook');
//         resolve({ user: 'Name' });
//     }, 1000);
// });

// Promise.all([youtube, facebook]).then(result => console.log(result));

// console.log('Finish');