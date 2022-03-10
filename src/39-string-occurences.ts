export {};

const count = (text : string, target : string): number => {
    let arr = text.toLowerCase().split(" ");
    target = target.toLowerCase();
    let count = 0
    arr.forEach(element => {
        if (element === target) {
            count++
        }
    });
    return count
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
