//PARAMETER: Strings passed in will consist of only letters and spaces. 
//           Spaces will be included only when more than one word is present.
//RESULT:    A function that takes in a string of one or more words, and 
//           returns the same string, but with all words that have five 
//           or more letters reversed.
//EXAMPLE:   "Hey fellow warriors"  --> "Hey wollef sroirraw" 
//           "This is a test        --> "This is a test"

function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }

function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }