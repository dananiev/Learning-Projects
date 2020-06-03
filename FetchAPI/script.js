// WEB DEV SIMPLIFIED

// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Kevin',
//         age: 24,
//         weight: 86
//     })
// })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('Error'))



// TRAVERSY MEDIA

const buttonForText = document.getElementById('getText');
buttonForText.addEventListener('click', getText);

const buttonForUsers = document.getElementById('getUsers');
buttonForUsers.addEventListener('click', getUsers);

const buttonForPosts =document.getElementById('getPosts');
buttonForPosts.addEventListener('click', getPosts);

const addPostToForm = document.getElementById('addPost');
addPostToForm.addEventListener('submit', addPost);

function getText() {
    fetch('sampleText.txt')
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => console.log(error))
}

function getUsers() {
    fetch('users.json')
        .then(res => res.json())
        .then(data => {
            let output = `<h2 class='mb-4'>Users</h2>`;
            data.forEach(data => {
                output += `
                    <ul class='list-group mb-3'>
                        <li class='list-group-item'>${data.id}</li>
                        <li class='list-group-item'>${data.name}</li>
                        <li class='list-group-item'>${data.email}</li>
                    </ul>
                `
                document.getElementById('output').innerHTML = output;
            });
        })
}

// function getPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => 
//             {
//                 let output = '<h2>Posts</h2>';
//                 data.forEach(data => {
//                     output += `
//                         <div>
//                             <h3>${data.title}</h3>
//                             <p>${data.body}</p>
//                         </div>
//                     `
//                     document.getElementById('output').innerHTML = output;
//                 })
//             }
//         );
// }

// function addPost(e) {
//     e.preventDefault();

//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({title: title, body: body})
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

function getPosts() {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => 
            {
                let output = `<h2 class='mb-4'>Names</h2>`;
                data.data.forEach(data => {
                    output += `
                        <div class='card card-body mb-3'>
                            <h3>${data.first_name}</h3>
                            <p>${data.last_name}</p>
                        </div>
                    `
                    document.getElementById('output').innerHTML = output;
                })
            }
        );
}

function addPost(e) {
    e.preventDefault();

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
}