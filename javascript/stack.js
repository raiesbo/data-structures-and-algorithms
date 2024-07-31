class Stack {
    constructor(arr = []) {
        this.items = arr
    }

    push = element => {
        this.items.push(element)
    }

    pop = () => {
        return this.items.pop()
    }

    peek = () => {
        return this.items[this.items.length - 1]
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    clear = () => {
        this.items = []
    }

    size = () => {
        return this.items.length
    }

    print = () => {
        console.log(this.items.toString())
        return this.items.toString()
    }

}


module.exports = Stack;