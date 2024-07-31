const bubbleSort = require("./bubbleSort");

describe("Bubble sort function set of tests", () => {
    test("Cheacking if it sorts correctly", () => {
        const array = [1, 5, 3, 2, 4]
        const sortedArray = [1, 2, 3, 4, 5]
        expect(bubbleSort(array)).toEqual(sortedArray)
        const array2 = []
        const sortedArray2 = []
        expect(bubbleSort(array2)).toEqual(sortedArray2)
        const array3 = [1]
        const sortedArray3 = [1]
        expect(bubbleSort(array3)).toEqual(sortedArray3)
    })
})