class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    nodeFactory = (element) => {
        class Node {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        }

        return new Node(element)
    }

    append = (element) => {
        let node = this.nodeFactory(element);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            // Loop the list until find last item
            while (current.next) {
                current = current.next;
            }

            //get last item and assign next to node to make the link
            current.next = node

        }

        this.length++
    }

    insert = (position, element) => { }
    removeAt = (position) => { }
    remove = (element) => { }
    indexOf = (element) => { }
    getHead = () => {
        return this.head;
    }
    isEmpty = () => {
        return this.length === 0;
    }
    size = () => {
        return this.length;
    }
    toString = () => { }
    print = () => { }
}

module.exports = LinkedList;