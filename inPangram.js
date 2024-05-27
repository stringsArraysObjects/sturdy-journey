//PARAMETER:    Ignore numbers and punctuation.
//RESULT:   Given a string, detect whether or not it is a pangram. Return True if it is, False if not
//PSEUDOCODE:     
//              Essentially we are defining our isPangram function to 
//              test if our alpabet subset is included in the passed in string.
//              We set the passed string toLowerCase,
//              Then we provide a alphebet string as the subset
//              split the subset to convert it to an array in order to use the 
//              Array.prototype.every method which tests whether all the letters are present in the 
//              passed in string by using the includes method.
//              
const isPangram = (string) => {
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split("").every(x => string.includes(x));
}