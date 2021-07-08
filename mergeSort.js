const mergeSort = (array) => {
    let length = array.length;

    if (length <= 1) {
        return array;
    }

    let middle = Math.floor(length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

}

const merge = (left, right) => {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    };

    return [...result, ...left, ...right]
}


module.exports = mergeSort;