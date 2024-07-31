const insertionSort = (array) => {
    const length = array.length;
    let j, temp;

    for (let i = 0; i < length; i++) {
        j = i;
        temp = array[i]
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }

    return array;
}


module.exports = insertionSort;