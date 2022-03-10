export {};

function onlyTheAces(arr : string[]): string[] {
    let result: string[] = [];
    arr.forEach(element => {
        if (element === "Ace") {
            result.push(element)
        }
    });
    return result
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
