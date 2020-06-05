////////////////////////////////////////////////////////////// ASYNC
////////////////////////////////////////////////////////////// NOOB - BEGINNER CODE
// const readline = require('readline');
// const readlineInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// readlineInterface.question('What is your name? ', name => {
//     readlineInterface.question('What is your job? ', job => {
//         readlineInterface.question('How old are you? ', age => {
//             console.log('Hello ' + name + '. You are a ' + age + ' years old ' + job + '.');
//             readlineInterface.close()
//         });
//     });
// });
////////////////////////////////////////////////////////////// ADVANCED CODE
// const readline = require('readline');
// const readlineInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// async function main() {
//     const name = await askQuestion(readlineInterface, 'What is your name? '); 
//     const job = await askQuestion(readlineInterface, 'What is your job? ');
//     const age = await askQuestion(readlineInterface, 'How old are you? ');
//
//     console.log(`Hello ${name}. You are a ${age} years old ${job}.`);
//     readlineInterface.close();
// }
// main();
//
// function askQuestion(readlineInterface, question) {
//     return new Promise(resolve => {
//         readlineInterface.question(question, answer => {
//             resolve(answer);
//         });
//     });
// }
////////////////////////////////////////////////////////////// PROFFESIONAL CODE
// const askQuestion = require('./askQuestion');
//
// async function main() {
//     const name = await askQuestion('What is your name? ');
//     const job = await askQuestion('What is your job? ');
//     const age = await askQuestion('How old are you? ');
//
//     console.log(`Hello ${name}. You are a ${age} years old ${job}.`);
// }
//
// main();
////////////////////////////////////////////////////////////// FAT FUNCTIONS
////////////////////////////////////////////////////////////// NOOB - BEGINNER CODE
// const { updateUser, createUser } = require('./users');
//
// function saveUser(user) {
//     const errors = [];
//     if (user.username) {
//         if (user.username.length < 3) {
//             errors.push('Username must be 3 or more characters');
//         }
//     } else {
//         errors.push('Username is required');
//     }
//
//     if (user.password) {
//         if (user.password.length < 8) {
//             errors.push('Password must be 8 or more characters');          
//         }
//     } else {
//         errors.push('Password is required');
//     }
//
//     if (errors.length > 0) {
//         errors.forEach(error => console.log(error));
//         return
//     }
//
//     if (user.id == null) {
//         console.log('Create user');
//         createUser(user);
//     } else {
//         console.log('Update user');
//         updateUser(user);
//     }
// }
//
// const user = {
//     username: 'Denko',
//     password: 'password'
// }
//
// saveUser(user);
////////////////////////////////////////////////////////////// ADVANCED CODE
// const { updateUser, createUser } = require('./users');
//
// function saveUser(user) {
//     if (user.id == null) {
//         console.log("Create user");
//         createUser(user);
//     } else {
//         console.log('Update user');
//         updateUser(user);
//     }
// }
//
// function validateUser(user) {
//     return [
//         ...validateUsername(user.username),
//         ...validatePassword(user.password)
//     ]
// }
//
// function validateUsername(username) {
//     const errors = [];
//     if (!username) errors.push('Username is required');
//     if (username != null && username.length < 3) errors.push('Username must be 3 or more characters');
//     return errors;
// }
//
// function validatePassword(password) {
//     const errors = [];
//     if (!password) errors.push('Password is required');
//     if (password != null && password.length < 8) errors.push('Password must be 8 or more characters');
//     return errors;
// }
//
// const user = {
//     username: null,
//     passoword: ''
// };
//
// const errors = validateUser(user);
// if (errors.length > 0) {
//     errors.forEach(error => console.log(error));
//     return
// };
//
// saveUser(user);
////////////////////////////////////////////////////////////// PROFFESIONAL CODE
const { updateUser, createUser } = require('./users');
const { validationMessages, printErrors } = require('./validation');

function saveUser(user) {
    if (user.id == null) {
        console.log("Create user");
        createUser(user);
    } else {
        console.log('Update user');
        updateUser(user);
    }
}

function validateUser(user) {
    const validations = {
        username: {
            required: true,
            length: 3
        },
        password: {
            required: true,
            length: 8
        }
    }

    const errors = validationMessages(validations, user);

    return {
        valid: Object.values(errors).every(messages => messages.length === 0),
        errors: errors
    }
}

const user = {
    id: 1,
    username: '',
    password: 'password'
}

const { errors, valid } = validateUser(user);
valid ? saveUser(user) : printErrors(errors); 