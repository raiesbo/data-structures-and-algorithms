const LinkedList = require('./linkedList')


describe('Linked list set of tests', () => {
    test('the class instanciates correctly', () => {
        const newLinkedList = new LinkedList();
        expect(newLinkedList).toBeInstanceOf(LinkedList)
    })
    test('Linked List append functionality', () => {
        const newLinkedList = new LinkedList();
        newLinkedList.append(3)
        expect(newLinkedList.size()).toEqual(1)
        newLinkedList.append(5)
        expect(newLinkedList.size()).toEqual(2)
    })
    test('Linked List insert functionality', () => {

    })
    test('Linked List removeAt functionality', () => {

    })
    test('Linked List remove functionality', () => {

    })
    test('Linked List indexOf functionality', () => {

    })
    test('Linked List isEmpty functionality', () => {

    })
    test('Linked List size functionality', () => {

    })
    test('Linked List toString functionality', () => {

    })
    test('Linked List print functionality', () => {

    })
})
