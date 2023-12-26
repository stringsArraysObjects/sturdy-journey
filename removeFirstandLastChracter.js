//PARAMETER: given the orginal string
//            no strings with less than
//             2 characters.
//RESULT:  Create a function that removes
//         the first and last characters of
//         a string.
//EXAMPLE:  assertEquals("lac", RemoveChars.remove("place"))
//PSEUDOCODE: use a string method to create a
//              substring that meets the specified criteria.       

function removeChar(str) {
    return str.slice(1, -1);
  }