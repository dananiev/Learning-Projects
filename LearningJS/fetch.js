//     const getPosts = () => {
//     return fetch(`https://jsonplaceholder.typicode.com/posts`)
//         .then(res => res.json())
//         .then(posts => console.log(posts))
// }

const getPosts = fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => console.log(data))