const Stack = require('./stack');

describe("Stack data structure tests collection", () => {
    test('instanciates a class with and without default list elementos', () => {
        const newStack = new Stack([1, 2, 3])
        expect(newStack.items).toEqual([1, 2, 3])
        const newStack2 = new Stack()
        expect(newStack2.items).toEqual([])
    })

    test("it is possible to add element at the top of the stack", () => {
        const newStack = new Stack()
        newStack.push(1)
        newStack.push(2)
        expect(newStack.items).toEqual([1, 2])
    })

    test("it is possible to pop the last element", () => {
        const newStack = new Stack()
        newStack.push(1)
        newStack.push(2)
        expect(newStack.pop()).toEqual(2)
        expect(newStack.items).toEqual([1])
    })

    test('clear method empties the list', () => {
        const newStack = new Stack([1, 2, 3])
        newStack.clear()
        expect(newStack.items).toEqual([])
    })

    test('the method can returno all the values as string', () => {
        const newStack = new Stack([1, 2, 3])
        expect(newStack.print()).toEqual('1,2,3')
    })

    test('the method "peek" returns the top item', () => {
        const newStack = new Stack([1, 2, 3])
        expect(newStack.peek()).toEqual(3)
        newStack.push(2)
        expect(newStack.peek()).toEqual(2)
    })

    test('size checkes the length of the stack', () => {
        const newStack = new Stack([1, 2, 3])
        expect(newStack.size()).toEqual(3)
        newStack.push(2)
        expect(newStack.size()).toEqual(4)
    })

    test('checking if the stack is empty', () => {
        const newStack = new Stack([3])
        expect(newStack.isEmpty()).toEqual(false)
        newStack.pop()
        expect(newStack.isEmpty()).toEqual(true)
    })
})

