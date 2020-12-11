// class StackNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.size = 0;
//     }

//     push(val) {
//         if (this.size === 0) {
//             this.top = new StackNode(val)
//         } else {
//             const pushNode = new StackNode(val);
//             pushNode.next = this.top;
//             this.top = pushNode;
//         }

//         this.size++;
//     }

//     pop() {
//         if (this.size === 0) return null;
//         const poppedNode = this.top;
//         this.top = this.top.next;
//         this.size--;
//         return poppedNode.val;
//     }

//     getTop() {
//         return this.top.val;
//     }
// }

// const myStack = new Stack();
// myStack.push('a');
// myStack.push('b');
// myStack.push('c');
// console.log(myStack.pop());
// console.log(myStack.size);



///////////////// Stack Task
function BracketMatcher(str) {
    const stack = [];

    for (let i = 0; i <= str.length; i++) {
        let curr = str[i];
        if (curr === '(') {
            stack.push('(');
        } else if (curr === ')') {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0 ? true : false;
}

console.log(BracketMatcher('()hi(there)'));
console.log(BracketMatcher('()hi(there))'));