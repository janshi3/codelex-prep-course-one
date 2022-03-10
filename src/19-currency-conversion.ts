export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

function foreginConversion(price : number, currentRate : number) : number {
    let result = price * currentRate;
    result += result * 0.01; // Adding the 1% fee
    return +result.toFixed(2)
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = foreginConversion(price, 1.34);
const priceInBRL = foreginConversion(price, 6.91);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
