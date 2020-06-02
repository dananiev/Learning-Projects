class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // add element to top of stack
    push(element) {
        this.items[this.count] = element;
        this.count += 1;
        return `${element} added to ${this.count - 1}`;
    }

    // return and remove top element in stack
    // return undefined if stack is empty
    pop() {
        if (this.count === 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        return deleteItem;
    }

    // check top element in stack
    peek() {
        return this.items[this.count - 1];
    }

    // check if stack is empty
    isEmpty() {
        return this.count === 0 ? 'stack is empty' : 'stack is not empty';
    }
    
    // check size of stack
    size() {
        return this.count;
    }

    // print elements in stack
    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

    // clear stack
    clear() {
        this.items = [];
        this.count = 0;
        return this.items;
    }
}

const stack = new Stack();

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.push(40));
console.log(stack.push(50));

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

console.log(stack.print());

console.log(stack.clear());