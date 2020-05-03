// function printQuiz(questions) {
//     questions.forEach(question => {
//         console.log(question.description);
//         switch(question.type) {
//             case 'boolean':
//                 console.log('1. True');
//                 console.log('2. False');
//                 break;
//             case 'multipleChoice':
//                 question.options.forEach((option, index) => {
//                     console.log(`${index + 1}. ${option}`);
//                 })
//                 break;
//             case 'text':
//                 console.log('Answer _______');
//             break;
//             case 'range':
//                 console.log('Minimum_____');
//                 console.log('Maximum_____');
//             break;
//         }
//     })
// }

// const questions = [
//     {
//         type: 'boolean',
//         description: 'This video is useful.'
//     },
//     {
//         type: 'multipleChoice',
//         description: 'What is your favourite language?',
//         options: ['CSS', 'HTML', 'JS', 'Python']
//     },
//     {
//         type: 'text',
//         description: 'Describe your favorite js feature.'
//     },
//     {
//         type: 'range',
//         description: 'What is the speed limit in your city?'
//     }
// ]

// printQuiz(questions);


class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Answer: ___________');
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Minimum: ______');
        console.log('Maximum: ______');
    }
}

class JavaScriptQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('The reduce function');
    }
}

function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log('');
    })
}

const questions = [
    new BooleanQuestion('This video is useful.'),
    new MultipleChoiceQuestion('What is your favourite language?', ['CSS', 'HTML', 'JS', 'Python']),
    new TextQuestion('Describe your favourite JS feature.'),
    new RangeQuestion('What is the speed limit in your city?'),
    new JavaScriptQuestion('What is your favorite JS function?')
]

printQuiz(questions);