// * Algorithm: Display | Singly Linked Lists

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    display() {
        let currentNode = this.head;
        let values = [];
        while (currentNode) {
            values.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return values.join(', ');
    }
}

const SLL1 = new SLL()
console.log(SLL1.addFront(76)) // Output:  Node { data: 76, next: null }
console.log(SLL1.addFront(2)) // Output:  Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display()) // Output:  "2, 76"
console.log(SLL1.addFront(11.41)) // Output:  Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log(SLL1.display()) // Output:  "11.41, 2, 76"