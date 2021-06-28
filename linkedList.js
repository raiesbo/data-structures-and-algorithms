class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    Node = (element) => {
        this.element = element;
        this.next = null;
    }

    append = (element) => { }
    insert = (position, element) => { }
    removeAt = (position) => { }
    remove = (element) => { }
    indexOf = (element) => { }
    isEmpty = () => { }
    size = () => { }
    toString = () => { }
    print = () => { }
}

module.exports = LinkedList;