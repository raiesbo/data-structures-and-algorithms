const mergeSort = require("./mergeSort");

describe("Merge sort function set of tests", () => {
    test("Cheacking if it sorts correctly", () => {
        const array = [1, 5, 3, 2, 4]
        const sortedArray = [1, 2, 3, 4, 5]
        expect(mergeSort(array)).toEqual(sortedArray)
        const array2 = []
        const sortedArray2 = []
        expect(mergeSort(array2)).toEqual(sortedArray2)
        const array3 = [1]
        const sortedArray3 = [1]
        expect(mergeSort(array3)).toEqual(sortedArray3)
    })
})