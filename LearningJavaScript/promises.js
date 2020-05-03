let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then((message) => {
    //console.log('This is in the then ' + message);
}).catch((message) => {
    //console.log('This is in the catch ' + message);
})


const userLeft = false;
const userWatchingCatMeme = false;
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'userLeft',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs Up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    //console.log('Success: ' + message);
}).catch((error) => {
    //console.log(error.name + ' ' + error.message);
})


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video One Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video Two Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo
]).then((messages) => {
    //console.log(messages);
})

Promise.race([
    recordVideoOne,
    recordVideoTwo
]).then((message) => {
    console.log(message);
})