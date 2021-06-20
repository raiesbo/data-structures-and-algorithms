const LinkedList = require('./linkedList')


describe('Linked list set of tests', () => {
    test('the class instanciates correctly', () => {
        const newLinkedList = new LinkedList();
        expect(newLinkedList).toBeInstanceOf(LinkedList)
    })
})
