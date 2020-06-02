const posts = [
   { title: 'Post One', body: 'This is post one' },
   { title: 'Post Two', body: 'This is post two' }
];

// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPost);



function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            !error ? resolve() : reject('Error: something went wrong!');
        }, 2000);
    });
}

// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err));


// async function init() {
//     await createPost({ title: 'Post Three', body: 'This is post Three' });
//     getPosts();
// }
// init();

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}

fetchUsers();


// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));