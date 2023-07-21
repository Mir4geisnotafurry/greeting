function sortArray(array) {
    let sorted = array.sort(function (x, y) {
        return x - y;
    })

    return sorted
}


function sortArrayTwo(array) {
    for (let i = 0; i < array.length; i ++) {
        let smallest = i;
        for (let j = i; j < array.length; j++) {
            if (array[smallest] > array[j]) {
                smallest = j;
            }
        }
        let temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
    }
    return array;
}