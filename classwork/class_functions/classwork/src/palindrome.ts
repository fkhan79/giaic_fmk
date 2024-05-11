//generate a code for Palindrome
function PalindromeWithLoop(str: string) {
/*
s.replace(/[^a-zA-Z0-9]/g, ''): This removes all special characters and spaces from the input string s. 
                                The regular expression /[^a-zA-Z0-9]/g matches any character that is not a letter 
                                (uppercase or lowercase) or a digit, and replaces them with an empty string.
.toLowerCase(): This converts the cleaned string to lowercase. It's important for case-insensitive comparison later.
 */


    // Remove special characters and spaces, convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = cleanedStr.length;
    let result = "";
    // Iterate through the characters of the cleaned string in reverse order
    for (let i = len - 1; i >= 0; i--) {
        // Build the reversed string by appending characters from the end
        result += cleanedStr[i];
    }
    // Check if the reversed string is equal to the original cleaned string
    return result === cleanedStr;
}
function PalindromeWithStringFunctions(str:string):boolean{     
    // Remove special characters and spaces
    const cleanedS = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is equal to its reverse
    //.split('').reverse().join(''): This splits the cleaned string into an array of characters, reverses the order 
    //                           of the array, and then joins the characters back into a single string. This gives 
    //                           us the reversed version of the cleaned string.
    return cleanedS === cleanedS.split('').reverse().join('');
}

let val:string="A man, a plan, a canal, Panama!";
console.log(`The WordPalindrome( "${val}")'s result is:${PalindromeWithLoop(val)}`);

console.log(`The WordPalindrome( "${val}")'s result is:${PalindromeWithStringFunctions(val)}`);