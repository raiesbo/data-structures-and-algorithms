const Queue = require('./queue');


describe('Queue data structure tests collection', () => {
    test('We can instanciate Queue type with and without existing Queue', () => {
        const newQueue = new Queue();
        expect(newQueue).toBeInstanceOf(Queue);
        expect(newQueue.items).toEqual([]);
        const newQueue2 = new Queue([1, 2, 3]);
        expect(newQueue2.items).toEqual([1, 2, 3]);
    })

    test("Adding elemento at the end of the Queue", () => {
        const newQueue = new Queue();
        newQueue.enqueue(2)
        expect(newQueue.items).toEqual([2]);
    })

    test("Deleting the first element", () => {
        const newQueue = new Queue([2, 3]);
        newQueue.dequeue()
        expect(newQueue.items).toEqual([3]);
    })

    test("Clearing a Queue", () => {
        const newQueue = new Queue([2, 3]);
        newQueue.clear()
        expect(newQueue.items).toEqual([]);
    })

    test('checking the first element of the queue', () => {
        const newQueue = new Queue([2, 3]);
        expect(newQueue.front()).toEqual(2)
        newQueue.dequeue()
        expect(newQueue.front()).toEqual(3)
    })

    test('checking if the queue is empty', () => {
        const newQueue = new Queue([2]);
        expect(newQueue.isEmpty()).toEqual(false)
        newQueue.dequeue()
        expect(newQueue.isEmpty()).toEqual(true)
    })

    test('cheking size method', () => {
        const newQueue = new Queue([2])
        expect(newQueue.size()).toEqual(1)
        newQueue.enqueue(5)
        expect(newQueue.size()).toEqual(2)
    })

    test('printing items string in console', () => {
        const newQueue = new Queue([2, 3]);
        expect(newQueue.print()).toEqual('2,3')
        newQueue.enqueue(4)
        expect(newQueue.print()).toEqual('2,3,4')
    })
})