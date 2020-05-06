function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function(info) {
        this.info = info;
        this.link = null;
    }
    
    this.size = function() {
        return length;
    }
    
    this.head = function() {
        return head;
    }
    
    this.add = function(info) {
        let node = new Node(info);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;
    
            while (currentNode.link) {
                currentNode = currentNode.link;
            }
    
            currentNode.link = node;
        }
    
        length++;
    };

    this.remove = function(info) {
        let currentNode = head;
        let previousNode;

        if (currentNode.info === info) {
            head = currentNode.link;
        } else {
            while (currentNode.info !== info) {
                previousNode = currentNode;
                currentNode = currentNode.link;
            }

            previousNode.link = currentNode.link;
        }

        length--;
    };

    this.isEmpty = function() {
        return length === 0;
    }

    this.indexOf = function(info) {
        let currentNode = head;
        let index = -1;

        while(currentNode) {
            index++;
            if (currentNode.info === info) {
                return index;
            }

            currentNode = currentNode.link;
        }

        return -1;
    };

    this.elementAt = function(index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.link;
        }
        return currentNode.info;
    };

    this.addAt = function(index, info) {
        let node = new Node(info);

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.link = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentIndex;
                currentNode = currentNode.link;
            }
            node.link = currentNode;
            previousNode.link = node;
        }

        length++;
    };
    
    this.removeAt = function(index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= length) {
            return null;
        }

        if (index === 0) {
            head = currentNode.link;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.link;
            }
            previousNode.link = currentNode.link;
        }

        length--;
        return currentNode.info;
    };
}

let conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');


console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());
console.log(conga.remove('Dog'));
console.log(conga.size());
console.log(conga.head());
console.log(conga.add('Lion'));