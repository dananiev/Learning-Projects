class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// const breadthFirstPrint = (root) => {
//     const queue = [ root ];
//     while (queue.length > 0) {
//         const curr = queue.shift();
//         console.log(curr.val)
//         if (curr.left !== null) {
//             queue.push(curr.left)
//         }
//         if (curr.right !== null) {
//             queue.push(curr.right);
//         }
//     }
// }

// breadthFirstPrint(a)



// const bfs = (root, target) => {
//     const queue = [ root ];
//     while (queue.length > 0) {
//         const curr = queue.shift();

//         if (curr.val === target) {
//             return true;
//         }

//         if (curr.left !== null) {
//             queue.push(curr.left);
//         }
//         if (curr.right !== null) {
//             queue.push(curr.right);
//         }
//     }

//     return false;
// }

// console.log(bfs(a, 'e'));
// console.log(bfs(a, 'z'));


// const a = new Node(2);
// const b = new Node(3);
// const c = new Node(5);
// const d = new Node(1);
// const e = new Node(2);
// const f = new Node(3);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// const sumTree = (root) => {
//     const queue = [ root ];
//     let sum = 0;
//     while (queue.length > 0) {
//         let curr = queue.shift();
//         sum += curr.val;
//         if (curr.left !== null) {
//             queue.push(curr.left)
//         }
//         if (curr.right !== null) {
//             queue.push(curr.right);
//         }
//     }
//     return sum;
// }

// console.log(sumTree(a));



const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const depthFirstPrint = (root) => {
//     const stack = [ root ];
//     while (stack.length > 0) {
//         const curr = stack.pop();
//         console.log(curr.val)
//         if (curr.left !== null) {
//             stack.push(curr.left);
//         }
//         if (curr.right !== null) {
//             stack.push(curr.right);
//         }
//     }
// }


// pre-order traversal
const depthFirstPrint = (root) => {
    if (root === null) return;

    console.log(root.val);
    depthFirstPrint(root.left);
    depthFirstPrint(root.right);
}

depthFirstPrint(a);

console.log('---')

// post-order traversal
const postOrder = (root) => {
    if (root === null) return;

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

postOrder(a)

console.log('---')

// in-order traversal
const inOrder = (root) => {
    if (root === null) return;

    inOrder(root.left);
    console.log(root.val)
    inOrder(root.right);
}

inOrder(a);

// console.log('---')


// const sumTree = (root) => {
//     if (root === null) return 0;
//     return sumTree(root.left) + root.val + sumTree(root.right);
// }

// console.log(sumTree(a));