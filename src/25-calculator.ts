export {};

function add(a : number, b : number): number {
    return a + b;
}

function subtract(a : number, b : number): number {
    return a - b;
}

function sum(arr : number[]): number {
    let result : number = 0;
    arr.forEach(element => {
        result += element
    });
    return result;
}

function multiply(arr : number[]): number {
    let result : number = 1;
    arr.forEach(element => {
        result *= element;
    });
    return result;
}

function power(a : number, b : number): number {
    return a**b;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
