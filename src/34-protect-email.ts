export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

const protectEmail = (email : string): string => {
    let result = "";
    let i = email.indexOf("@");
    result += email.slice(0, 3) + '...' + email.slice(i);
    return result;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
