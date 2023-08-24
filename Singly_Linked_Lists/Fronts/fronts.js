// * Algorithm Fronts | Singly Linked Lists

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
    //* 1. - Add Front
    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    //* 2. - Remove Front
    removeFront() {
        if (this.head) {
            const newHead = this.head.next;
            this.head = newHead;
            return this.head;
        } else {
            return null;
        }
    }
    //* 3. - Front
    front() {
        if (this.head) {
            return this.head.data;
        } else {
            return null;
        }
    }
}

const SLL1 = new SLL();
console.log("\n----- ADD FRONT ------")
console.log(SLL1.addFront(18)); // Output:  Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // Output:  Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73));
/* Output:  Node {
    data: 73,
    next: Node { data: 5, next: Node { data: 18, next: null } }
} */

console.log("\n---- REMOVE FRONT ----")
console.log(SLL1.removeFront()) // Output:  Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()) // Output:  Node { data: 18, next: null }

console.log("\n------- FRONT --------")
console.log(SLL1.front()) // Output:  18
console.log(SLL1.removeFront()) // Output:  null
console.log(SLL1.front()) // Output:  null

