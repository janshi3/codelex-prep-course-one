export {};

const repeatString = (word : string, repeatCount : number): string => {
    return word.repeat(repeatCount);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
