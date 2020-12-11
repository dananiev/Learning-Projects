// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(val) {
//         if (this.head === null) {
//             this.head = new Node(val);
//             return;
//         }

//         let curr = this.head;
//         while (curr.next !== null) {
//             curr = curr.next;
//         }
//         curr.next = new Node(val);
//     }

//     print() {
//         let str = '';
//         let curr = this.head;
//         while (curr !== null) {
//             str += curr.val + ' ';
//             curr = curr.next;
//         }
//         console.log(str)
//     }

//     contains(target) {
//         let curr = this.head;

//         while (curr !== null) {
//             if (curr.val === target) {
//                 return true;
//             }
//             curr = curr.next;
//         }

//         return false;
//     }
// }

// const list = new LinkedList();
// list.append('A');
// list.append('A#');
// list.append('B');
// list.append('C');
// list.append('C#');
// list.append('D');
// list.append('D#');
// list.append('E');
// list.append('F');
// list.append('F#');
// list.append('G');
// list.append('G#');

// list.print();

// console.log(list.contains('A'));
// console.log(list.contains('M')); 



/////////////////////////////////// RECURSIVE LINKED LIST
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(val) {
//         if (this.head === null) {
//             this.head = new Node(val);
//         }

//         this._append(val, this.head);
//     }

//     _append(val, curr) {
//         if (curr.next === null) {
//             curr.next = new Node(val);
//             return;
//         }
//         this._append(val, curr.next);
//     }

//     print() {
//         const output = this._print(this.head);
//         console.log(output);
//     }

//     _print(curr) {
//         if (curr === null) return '';
//         return curr.val + '->' + this._print(curr.next);
//     }

//     contains(target) {
//         return this._contains(target, this.head)
//     }

//     _contains(target, curr) {
//         if (curr === null) return false
//         if (curr.val === target) return true
//         return this._contains(target, curr.next);
//     }
// }

// const list = new LinkedList();
// list.append(11);
// list.append(10);
// list.append(7);
// list.append(2);

// list.print();

// list.contains('A');
// list.contains('D');

// const sumList = (head) => {
//     let sum = 0;
//     let curr = head;

//     while (curr !== null) {
//         sum += curr.val;
//         curr = curr.next;
//     }
//     return sum;
// }

// const sumList = (head) => {
//     if (head === null) return 0;
//     return head.val + sumList(head.next);
// }

// console.log(sumList(list.head));



//////////////////////////////////// HOW TO DELETE IN A LINKED LIST
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// const deleteValue = (head, target) => {
//     if (head.val === target) {
//         return head.next;
//     }

//     let prev = null;
//     let curr = head;
//     while (curr !== null) {
//         if (curr.val === target) {
//             prev.next = curr.next;
//         }
//         prev = curr;
//         curr = curr.next;
//     }

//     return head;
// }

// const deleteValue = (head, target) => {
//     if (head.val === target) {
//         return head.next;
//     }

//     _deleteValue(head, null, target);
//     return head;
// }

// const _deleteValue = (curr, prev, target) => {
//     if (curr === null) return;

//     if (curr.val === target) {
//         prev.next = curr.next;
//         return
//     }

//     _deleteValue(curr.next, curr, target); 
// }

// const print = (head) => {
//     if (head === null) return;
//     console.log(head.val);
//     print(head.next);
// }

// print(a);

// const newHead = deleteValue(a, 'd');

// console.log('-');
// print(newHead);




//////////////////////////////// HOW TO REVERSE A LINKED LIST
class Node {
    constructor (val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

const print = (head) => {
    if (head === null) return
    console.log(head.val);
    print(head.next)
}

print(a);

// const reverseList = (head) => {
//     let prev = null;
//     let curr = head;

//     while (curr !== null) {
//         let next = curr.next;
//         curr.next = prev;

//         prev = curr;
//         curr = next;
//     }

//     return prev;
// }


const reverseList = (curr, prev = null) => {
    if (curr === null) {
        return prev;
    }
    const next = curr.next;
    curr.next = prev;
    return reverseList(next, curr);
}

const newHead = reverseList(a);
console.log('---')
print(newHead);