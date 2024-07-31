const bubbleSort = (array) => {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }

    return array;
}

const swap = (array, indexOne, indexTwo) => {
    const secondItem = array[indexTwo]
    array[indexTwo] = array[indexOne]
    array[indexOne] = secondItem
    return array
}

module.exports = bubbleSort;