class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtFront(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    detectLoop() {
        let currentNode = this.head;
        const seenNodes = new Set();

        while (currentNode) {
            if (seenNodes.has(currentNode)) {
                return true;
            }
            seenNodes.add(currentNode);
            currentNode = currentNode.next;
        }

        return false;
    }
}

const list = new LinkedList();
list.insertAtFront(20);
list.insertAtFront(4);
list.insertAtFront(15);
list.insertAtFront(10);
list.head.next.next.next.next = list.head; // creates a loop

if (list.detectLoop()) {
    console.log("Loop found");
} else {
    console.log("No loop found");
}
