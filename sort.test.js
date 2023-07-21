let utils = require('course-utilities');
let sortArray = utils.load('./sort.js', 'sortArray');
let sortArrayTwo = utils.load('./sort.js', 'sortArrayTwo');

let inputs = [
    [4, 3, 2, 5, 6],
    [1, 2, 3, 4, 5],
    [15, 2, 3, 1],
    [], 
    [21, 41, 6, 9, 4, 13]
];

let outputs = [
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 15],
    [],
    [4, 6, 9, 13, 21, 41]
];

describe("Testing Sort():", () => {
    for (let i = 0; i < inputs.length; i++) {
        it("should sort from least to greatest", () => {
            expect(sortArray(inputs[i])).toStrictEqual(outputs[i]);
        })
    }
})

describe("Testing SortTwo():", () => {
    for (let i = 0; i < inputs.length; i++) {
        it("should sort from least to greatest", () => {
            expect(sortArrayTwo(inputs[i])).toStrictEqual(outputs[i]);
        })
    }
})