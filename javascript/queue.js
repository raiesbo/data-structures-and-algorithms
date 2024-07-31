class Queue {
    constructor(arr = []) {
        this.items = arr;
    }

    enqueue = element => {
        this.items.push(element);
    }

    dequeue = () => {
        this.items.shift();
    }

    front = () => {
        return this.items[0]
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    size = () => {
        return this.items.length
    }

    clear = () => {
        this.items = []
    }

    print = () => {
        console.log(this.items.toString())
        return this.items.toString()
    }
}

module.exports = Queue;