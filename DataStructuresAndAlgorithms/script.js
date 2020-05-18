// STACKS
// let letters = [];
// let word = 'racecar';
// let rWord = '';

// for (i = 0; i < word.length; i++) {
//     let current = word[i];
//     letters.push(current);
// }
// console.log(letters.join(''));

// for (i = 0; i < word.length; i++) {
//     rWord += letters.pop();
// }
// console.log(rWord);

// if (rWord === word ? console.log(`${word} is palindrome`) : console.log(`${word} is not palindrome`));

// let Stack = function() {
//     this.count = 0;
//     this.storage = {};

//     this.push = function(value) {
//         this.storage[this.count] = value;
//         this.count++;
//     }

//     this.pop = function() {
//         if (this.count === 0) {
//             return undefined;
//         }

//         this.count--;
//         let result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     this.size = function() {
//         return this.count;
//     }

//     this.peek = function() {
//         return this.storage[this.count - 1];
//     }
// }

// let myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// console.log(myStack);
// console.log(myStack.pop());
// console.log(myStack.size());
// console.log(myStack.peek());
// myStack.push(4);
// console.log(myStack);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SETS
// function Set() {
//     let collection = [];

//     this.has = function(element) {
//         return (collection.indexOf(element) !== -1)
//     };

//     this.values = function() {
//         return collection
//     };

//     this.add = function(element) {
//         if (!this.has(element)) {
//             collection.push(element)
//             return true
//         }
//         return false 
//     }

//     this.delete = function(element) {
//         if (this.has(element)) {
//             index = collection.indexOf(element);
//             collection.splice(index, 1);
//             return true
//         }
//         return false
//     }

//     this.size = function() {
//         return collection.length
//     }

//     this.union = function(otherSet) {
//         let unionSet = new Set();
//         let firstSet = this.values();
//         let secondSet = otherSet.values();
//         firstSet.forEach(function(e) {
//             unionSet.add(e);
//         });
//         secondSet.forEach(function(e) {
//             unionSet.add(e);
//         });
//         return unionSet;
//     }

//     this.intersection = function(otherSet) {
//         let intersectionSet = new Set();
//         let firstSet = this.values();
//         firstSet.forEach(function(e) {
//             if (otherSet.has(e)) {
//                 intersectionSet.add(e);
//             }
//         });
//         return intersectionSet;
//     };

//     this.difference = function(otherSet) {
//         let differenceSet = new Set();
//         let firstSet = this.values();
//         firstSet.forEach(function(e) {
//             if (!otherSet.has(e)) {
//                 differenceSet.add(e);
//             }
//         });
//         return differenceSet;
//     }

//     this.subset = function(otherSet) {
//         let firstSet = this.values();
//         return firstSet.every(function(value) {
//             return otherSet.has(value);
//         });
//     };
// };

// let mySet = new Set();
// console.log(mySet.has());
// console.log(mySet.values());
// console.log(mySet.add(1));
// console.log(mySet.delete(1));
// console.log(mySet.values());
// console.log(mySet.size());
// console.log(mySet.add(3));
// console.log(mySet.size());

// let setA = new Set();
// let setB = new Set();
// setA.add('a');
// setA.add('b');
// setB.add('a');
// setB.add('b');
// setB.add('c');
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());

// let setC = new Set();
// let setD = new Set();
// setC.add('a');
// setC.add('b');
// setD.add('c');
// setD.add('d');
// setD.add('e');
// console.log(setC.union(setD).values());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// QUEUE
// function Queue() {
//     collection = [];
    
//     this.print = function() {
//         return collection;
//     };

//     this.enqueue = function(element) {
//         collection.push(element);
//     };

//     this.dequeue = function() {
//         return collection.shift();
//     };

//     this.front = function() {
//         return collection[0];
//     };

//     this.size = function() {
//         return collection.length;
//     };

//     this.isEmpty = function() {
//         return (collection.length === 0);
//     };
// }

// let myQueue = new Queue();
// console.log(myQueue.print());
// console.log(myQueue.enqueue(1));
// console.log(myQueue.enqueue(2));
// console.log(myQueue.enqueue(3));
// console.log(myQueue.print());
// console.log(myQueue.dequeue());
// console.log(myQueue.front());
// console.log(myQueue.size());
// console.log(myQueue.isEmpty());

// function PriorityQueue() {
//     let collection = [];

//     this.printCollection = function() {
//         return collection;
//     }
    
//     this.enqueue = function(element) {
//         if (this.isEmpty()) {
//             collection.push(element);
//         } else {
//             let added = false;
//             for (i = 0; i < collection.length; i++) {
//                 if (element[1] < collection[i][1]) {
//                     collection.splice(i, 0, element);
//                     added = true;
//                     break;
//                 }
//             }
//             if (!added) {
//                 collection.push(element);
//             }
//         }
//     }

//     this.dequeue = function() {
//         let value = collection.shift();
//         return value[0];
//     }

//     this.front = function() {
//         return collection[0];
//     }

//     this.size = function() {
//         return collection.length;
//     }

//     this.isEmpty = function() {
//         return (collection.length === 0);
//     }
// }

// let myPriorityQueue = new PriorityQueue();
// myPriorityQueue.enqueue(['Simon', 2]);
// myPriorityQueue.enqueue(['Quincy Larson', 3]);
// myPriorityQueue.enqueue(['Ewa Mitulska-Wójcik', 1])
// myPriorityQueue.enqueue(['Briana Swift', 2])
// console.log(myPriorityQueue.printCollection());
// console.log(myPriorityQueue.size());
// myPriorityQueue.dequeue();
// console.log(myPriorityQueue.printCollection());
// console.log(myPriorityQueue.size());
// console.log(myPriorityQueue.front());
// console.log(myPriorityQueue.isEmpty());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BINARY SEARCH TREE
// class Node {
//     constructor(data, left = null, right = null) {
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     add(data) {
//         const node = this.root;
//         if (node === null) {
//             this.root = new Node(data);
//             return;
//         } else {
//             const searchTree = function(node) {
//                 if (data < node.data) {
//                     if (node.left === null) {
//                         node.left = new Node(data);
//                         return;
//                     } else if (node.left !== null) {
//                         return searchTree(node.left);
//                     }
//                 } else if (data > node.data) {
//                     if (node.right === null) {
//                         node.right = new Node(data);
//                         return;
//                     } else if (node.right !== null) {
//                         return searchTree(node.right);
//                     }
//                 } else {
//                     return null;
//                 }
//             }
//             return searchTree(node);
//         };
//     }

//     findMin() {
//         let current = this.root;
//         while (current.left !== null) {
//             current = current.left;
//         }
//         return current.data;
//     }

//     findMax() {
//         let current = this.root;
//         while (current.right !== null) {
//             current = current.right;
//         };
//         return current.data;
//     }

//     find(data) {
//         let current = this.root;
//         while (current.data !== data) {
//             if (data < current.data) {
//                 current = current.left;
//             } else {
//                 current = current.right;
//             }
//             if (current === null) {
//                 return null;
//             }
//         }
//         return current;
//     }

//     isPresent(data) {
//         let current = this.root;
//         while (current) {
//             if (data === current.data) {
//                 return true;
//             }
//             if (data < current.data) {
//                 current = current.left;
//             } else {
//                 current = current.right;
//             }
//         }
//         return false;
//     }

//     remove(data) {
//         const removeNode = function(node, data) {
//             if (node === null) {
//                 return null;
//             }
//             if (data == node.data) {
//                 if (node.left == null && node.right == null) {
//                     return null;
//                 }
//                 if (node.left == null) {
//                     return node.right;
//                 }
//                 if (node.right == null) {
//                     return node.left;
//                 }

//                 let tempNode = node.right;
//                 while (tempNode.left !== null) {
//                     tempNode = tempNode.left;
//                 }
//                 node.data = tempNode.data;
//                 node.right = removeNode(node.right, tempNode.data);
//                 return node;
//             } else if (data < node.data) {
//                 node.left = removeNode(node.left, data);
//                 return node;
//             } else {
//                 node.right = removeNode(node.right, data);
//                 return node;
//             }
//         }
//         this.root = removeNode(this.root, data);
//     }

//     isBalanced() {
//         return (this.findMinHeight() >= this.findMaxHeight() - 1);
//     }

//     findMinHeight(node = this.root) {
//         if (node == null) {
//             return -1;
//         };

//         let left = this.findMinHeight(node.left);
//         let right = this.findMinHeight(node.right);
//         if (left < right) {
//             return left + 1;
//         } else {
//             return right + 1;
//         }
//     }

//     findMaxHeight(node = this.root) {
//         if (node == null) {
//             return -1;
//         };

//         let left = this.findMaxHeight(node.left);
//         let right = this.findMaxHeight(node.right);
//         if (left > right) {
//             return left + 1;
//         } else {
//             return right + 1;
//         }
//     }

//     inOrder() {
//         if (this.root == null) {
//             return null;
//         } else {
//             let result = new Array();
//             function traverseInOrder(node) {
//                 node.left && traverseInOrder(node.left);
//                 result.push(node.data);
//                 node.right && traverseInOrder(node.right);
//             }
//             traverseInOrder(this.root);
//             return result;
//         };
//     }

//     preOrder() {
//         if (this.root == null) {
//             return null;
//         } else {
//             let result = new Array();
//             function traversePreOrder(node) {
//                 result.push(node.data);
//                 node.left && traversePreOrder(node.left);
//                 node.right && traversePreOrder(node.right);
//             }
//             traversePreOrder(this.root);
//             return result;
//         };
//     }

//     postOrder() {
//         if (this.root == null) {
//             return null;
//         } else {
//             let result = new Array();
//             function traversePostOrder(node) {
//                 node.left && traversePostOrder(node.left);
//                 node.right && traversePostOrder(node.right);
//                 result.push(node.data);
//             }
//             traversePostOrder(this.root);
//             return result;
//         };
//     }

//     levelOrder() {
//         let result = [];
//         let Q = [];

//         if (this.root != null) {
//             Q.push(this.root);
//             while(Q.length > 0) {
//                 let node = Q.shift();
//                 result.push(node.data);
//                 if(node.left != null) {
//                     Q.push(node.left);
//                 }
//                 if(node.right != null) {
//                     Q.push(node.right);
//                 }
//             }
//             return result;
//         } else {
//             return null;
//         }
//     }
// }

// const bst = new BST();

// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// console.log('inOrder: ' + bst.inOrder());
// console.log('preOrder: ' + bst.preOrder());
// console.log('postOrder: ' + bst.postOrder());

// console.log('levelOrder: ' + bst.levelOrder());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HASH TABLES
// let hash = (string, maxNumBuckets) => {
//     let hash = 0;
//     for (i = 0; i < string.length; i++) {
//         hash += string.charCodeAt(i);
//     }
//     return hash % maxNumBuckets;
// }

// // console.log(hash('quincy', 8));

// let HashTable = function() {
//     let storage = [];
//     const storageLimit = 14;

//     this.print = function() {
//         console.log(storage);
//     }

//     this.add = function(key, value) {
//         let index = hash(key, storageLimit);
//         if (storage[index] === undefined) {
//             storage[index] = [[key, value]];
//         } else {
//             let inserted = false;
//             for (i = 0; i < storage[index].length; i++) {
//                 if (storage[index][i][0] === key) {
//                     storage[index][i][1] = value;
//                     inserted = true;
//                 }
//             }
//             if (inserted === false) {
//                 storage[index].push([key, value]);
//             }
//         }
//     };

//     this.remove = function(key) {
//             let index = hash(key, storageLimit);
//             if (storage[index].length === 1 && storage[index][0][0] === key) {
//                 delete storage[index];
//             } else {
//                 for (i = 0; i < storage[index].length; i++) {
//                     if (storage[index][i][0] === key) {
//                         delete storage[index][i];
//                     }
//                 }
//             }
//     };

//     this.lookup = function(key) {
//         let index = hash(key, storageLimit);
//         if (storage[index] === undefined) {
//             return undefined;
//         } else {
//             for (i = 0; i < storage[index].length; i++) {
//                 if (storage[index][i][0] === key) {
//                     return storage[index][i][0];
//                 }
//             }
//         }
//     }
// }

// console.log(hash('derek', 10));

// let ht = new HashTable();
// ht.add('daniel', 'person');
// ht.add('lacy', 'dog');
// ht.add('rex', 'dinosour');
// ht.add('tux', 'penguin')
// console.log(ht.lookup('lacy'))
// ht.print();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LINKED LIST
// function LinkedList() {
//     let length = 0;
//     let head = null;

//     let Node = function(element) {
//         this.element = element;
//         this.next = null;
//     };

//     this.size = function() {
//         return length;
//     };

//     this.head = function() {
//         return head;
//     }

//     this.add = function(element) {
//         let node = new Node(element);
//         if (head === null) {
//             head = node;
//         } else {
//             let currentNode = head;
//             while(currentNode.next) {
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node;
//         }

//         length++;
//     };

//     this.remove = function(element) {
//         let currentNode = head;
//         let previousNode;
//         if (currentNode.element === element) {
//             head = currentNode.next;
//         } else {
//             while (currentNode.element !== element) {
//                 previousNode = currentNode;
//                 currentNode = currentNode.next;
//             }
//             previousNode.next = currentNode.next;
//         }
//         length--;
//     };

//     this.isEmpty = function() {
//         return length === 0;
//     };

//     this.indexOf = function(element) {
//         let currentNode = head;
//         let index = -1;

//         while (currentNode) {
//             index++;
//             if (currentNode.element === element) {
//                 return index;
//             }
//             currentNode = currentNode.next;
//         }

//         return -1;
//     };

//     this.elementAt = function(index) {
//         let currentNode = head;
//         let count = 0;
//         while (count < index) {
//             count++;
//             currentNode = currentNode.next;
//         }
//         return currentNode.element;
//     };

//     this.addAt = function(index, element) {
//         let node = new Node(element);

//         let currentNode = head;
//         let previousNode;
//         let currentIndex = 0;

//         if (index > length) {
//             return false;
//         }

//         if (index === 0) {
//             node.next = currentNode;
//             head = node;
//         } else {
//             while (currentIndex < index) {
//                 currentIndex++;
//                 previousNode = currentNode;
//                 currentNode = currentNode.next;
//             }
//             node.next = currentNode;
//             previousNode.next = node;
//         }
//         length++;
//     }

//     this.removeAt = function(index) {
//         let currentNode = head;
//         let previousNode;
//         let currentIndex = 0;
//         if (index < 0 || index >= length) {
//             return null;
//         }
//         if (index === 0) {
//             head = currentNode.next;
//         } else {
//             while (currentIndex < index) {
//                 currentIndex++;
//                 previousNode = currentNode;
//                 currentNode = currentNode.next;
//             }
//             previousNode.next = currentNode.next;
//         }
//         length--;
//         return currentNode.element;
//     }
// }

// let list = new LinkedList();
// list.add('Fish');
// list.add('Cat');
// list.add('Dog');
// list.add('Bird');
// list.add('Dinosaur');
// console.log(list.size());
// console.log(list.removeAt(3));
// console.log(list.elementAt(3));
// console.log(list.indexOf('Dog'));
// console.log(list.size());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TRIE
// let Node = function() {
//     this.keys = new Map();
//     this.end = false;

//     this.setEnd = function() {
//         this.end = true;
//     };

//     this.isEnd = function() {
//         return this.end;
//     };
// };

// let Trie = function() {
//     this.root = new Node();

//     this.add = function(input, node = this.root) {
//         if (input.length == 0) {
//             node.setEnd();
//             return;
//         } else if (!node.keys.has(input[0])) {
//             node.keys.set(input[0], new Node());
//             return this.add(input.substr(1), node.keys.get(input[0]));
//         } else {
//             return this.add(input.substr(1), node.keys.get(input[0]));
//         };
//     };

//     this.isWord = function(word) {
//         let node = this.root;
//         while (word.length > 1) {
//             if (!node.keys.has(word[0])) {
//                 return false;
//             } else {
//                 node = node.keys.get(word[0]);
//                 word = word.substr(1);
//             };
//         };
//         return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
//     }

//     this.print = function() {
//         let words = [];

//         let search = function(node, string) {
//             if (node.keys.size != 0) {
//                 for (let letter of node.keys.keys()) {
//                     search(node.keys.get(letter), string.concat(letter));
//                 };
//                 if (node.isEnd()) {
//                     words.push(string);
//                 }
//             } else {
//                 string.length > 0 ? words.push(string) : undefined;
//                 return;
//             };
//         };
//         search(this.root, new String());
//         return words.length > 0 ? words : null;
//     };
// };

// let trie = new Trie()
// trie.add('ball'); 
// trie.add('bat'); 
// trie.add('doll'); 
// trie.add('dork'); 
// trie.add('do'); 
// trie.add('dorm')
// trie.add('send')
// trie.add('sense')
// console.log(trie.isWord('doll'))
// console.log(trie.isWord('dor'))
// console.log(trie.isWord('dorf'))
// console.log(trie.print())

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HEAP

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 

// let MinHeap = function() {
//     let heap = [null];

//     this.insert = function(num) {
//         heap.push(num);
//         if (heap.length > 2) {
//             let idx = heap.length - 1;
//             while (heap[idx] < heap[Math.floor(idx/2)]) {
//                 if (idx >= 1) {
//                     [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
//                     if (Math.floor(idx/2) > 1) {
//                         idx = Math.floor(idx/2);
//                     } else {
//                         break;
//                     };
//                 };
//             };
//         };
//     };

//     this.remove = function() {
//         let smallest = heap[1];
//         if (heap.length > 2) {
//             heap[1] = heap[heap.length - 1];
//             heap.splice(heap.length - 1);
//             if (heap.length == 3) {
//                 if (heap[1] > heap[2]) {
//                     [heap[1], heap[2]] = [heap[2], heap[1]];
//                 };
//                 return smallest;
//             };
//             let i = 1;
//             let left = 2 * i;
//             let right = 2 * i + 1;
//             while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
//                 if (heap[left] < heap[right]) {
//                     [heap[i], heap[left]] = [heap[left], heap[i]];
//                     i = 2 * i;
//                 } else {
//                     [heap[i], heap[right]] = [heap[left], heap[i]];
//                     i = 2 * i + 1;
//                 };
//                 left = 2 * i;
//                 right = 2 * i + 1;
//                 if (heap[left] == undefined || heap[right] == undefined) {
//                     break;
//                 };
//             };
//         } else if (heap.length == 2) {
//             heap.splice(1, 1);
//         } else {
//             return null;
//         };
//         return smallest;
//     };

//     this.sort = function() {
//         let result = [];
//         while (heap.length > 1) {
//             result.push(this.remove());
//         };
//         return result;
//     };
// };

// let hemin = new MinHeap();

// console.log(hemin.insert(1));
// console.log(hemin.insert(2));
// console.log(hemin.insert(3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GRAPHS
/* Graphs: Breadth-first search */
function bfs(graph, root) {
    let nodesLen = {};

    for (i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    let queue = [root];
    let current;

    while (queue.length != 0) {
        current = queue.shift();

        let curConnected = graph[current];
        let neighborIdx = [];
        let idx = curConnected.indexOf(1);
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        for (j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        };
    };
    return nodesLen;
};

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1));
