const selectionSort = (array) => {
    const length = array.length;
    let indexMin;

    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin)
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

module.exports = selectionSort;