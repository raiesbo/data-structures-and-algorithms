const Set = require("./set");


describe('general Set data structure tests', () => {
    test('instancites correctly with empty object', () => {
        const newSet = new Set();
        expect(newSet).toBeInstanceOf(Set)
        expect(newSet.items).toEqual({})
    })
    test('Add method testing, adds a new item', () => {
        const newSet = new Set();
        newSet.add(1)
        expect(newSet.items).toEqual({ 1: 1 })
        newSet.add(1)
        expect(newSet.items).toEqual({ 1: 1 })
        newSet.add(2)
        expect(newSet.items).toEqual({ 1: 1, 2: 2 })
    })
    test('Delete method testing, erases a set item', () => {
        const newSet = new Set();
        newSet.add(1)
        newSet.add(2)
        newSet.add(3)
        newSet.delete(2)
        expect(newSet.items).toEqual({ 1: 1, 3: 3 })
    })
    test('HAS method testing', () => {
        const newSet = new Set();
        newSet.add(1)
        expect(newSet.has(2)).toBe(false)
        expect(newSet.has(1)).toBe(true)
    })
    test('CLEAR method testing, empties the set', () => {
        const newSet = new Set();
        newSet.add(1)
        newSet.clear()
        expect(newSet.items).toEqual({})
    })
    test('SIZE method testing, corresponds to the lenght of the set', () => {
        const newSet = new Set();
        expect(newSet.size()).toEqual(0)
        newSet.add(1)
        expect(newSet.size()).toEqual(1)
    })

    test('VALUES method testing, returns an array of values', () => {
        const newSet = new Set();
        newSet.add(1)
        expect(newSet.values()).toEqual([1])
        newSet.add(2)
        expect(newSet.values()).toEqual([1, 2])
        newSet.add(3)
        expect(newSet.values()).toEqual([1, 2, 3])
    })
})