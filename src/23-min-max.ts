export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

// Built-in Math methods

const min = (array: number[]): number => {
    return Math.min.apply(Math, array)
};

const max = (array: number[]): number => {
    return Math.max.apply(Math, array)
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9

// No Built-in Math methods

const customMin = (array: number[]): number => {
    let minVal = array[0]
    array.forEach(element => {
        if (element < minVal) {
            minVal = element
        }
    });
    return minVal
};

const customMax = (array: number[]): number => {
    let maxVal = array[0]
    array.forEach(element => {
        if (element > maxVal) {
            maxVal = element
        }
    });
    return maxVal
};

console.log(customMin([1, 2, 3, 4, 5])); // Expected output: 1
console.log(customMin([9, -3, 6])); // Expected output: -3
console.log(customMax([1, 2, 3, 4, 5])); // Expected output: 5
console.log(customMax([9, -3, 6])); // Expected output: 9
