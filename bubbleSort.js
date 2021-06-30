const bubbleSort = (array) => {
    let sortedArray = array;
    let length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                swap(sortedArray, j, j + 1)
            }
        }
    }

    return sortedArray;
}


const swap = (array, indexOne, indexTwo) => {
    const secondItem = array[indexTwo]
    array[indexTwo] = array[indexOne]
    array[indexOne] = secondItem
    return array
}

module.exports = bubbleSort;