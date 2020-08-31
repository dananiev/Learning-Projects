const LinkedList = require('./linkedList');

const ll = LinkedList.fromValues(10, 20, 30, 40)

ll.insertAtIndex(2, 60);
ll.removeHead();
ll.removeAtIndex(2);
ll.print();