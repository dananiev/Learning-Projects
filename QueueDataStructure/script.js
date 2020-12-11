// const queue = [];
// queue.push('a')
// queue.push('b')
// queue.push('c')
// queue.shift()


// console.log(queue)


// class QueueNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.back = null;
//         this.size = 0;
//     }

//     enqueue(val) {
//         const newNode = new QueueNode(val);
//         if (this.size === 0) {
//             this.front = newNode; 
//             this.back = newNode;
//         } else {
//             this.back.next = newNode;
//             this.back = newNode;
//         }
//         this.size++;
//     }

//     dequeue() {
//         if (this.size === 0) {
//             return null;
//         }

//         const removedNode = this.front;

//         if (this.size === 1) {
//             this.back = null;
//         }

//         this.front = this.front.next;
//         this.size--;
//         return removedNode.val;
//     }
// }

// const myQueue = new Queue();
// myQueue.enqueue('a');
// myQueue.enqueue('b');
// myQueue.enqueue('c');
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());



/////////////////// SNAKE MOVEMENT
class Snake {
    constructor() {
        this.snakeBody = [
            [4,1],
            [4,2],
            [4,3],
            [4,4]
        ];
    }

    move(direction) {
        const delta = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            right: [0, 1]
        }

        const currentHead = this.snakeBody[this.snakeBody.length - 1];
        const [ currRow, currCol ] = currentHead;
        const [ changeRow, changeCol ] = delta[direction];
        const newHead = [ currRow + changeRow, currCol + changeCol ];
        this.snakeBody.push(newHead);
        this.snakeBody.shift();
    }

    draw() {
        const grid = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                    row.push(' ')
            }
            grid.push(row);
        }
        
        this.snakeBody.forEach(pos => {
            const [row, col] = pos;
            grid[row][col] = '*';
        })

        console.clear;
        grid.forEach(row => console.log(row.join('|')));
    }

    play() {
        const stdin = process.stdin;
        stdin.setRawModel(true);
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', (keypress) => {
            if (keypress === 'w') this.move('up');
            if (keypress === 's') this.move('down');
            if (keypress === 'a') this.move('left');
            if (keypress === 'd') this.move('right');

            this.draw();
        })
    }
}

const game = new Snake();
game.play();