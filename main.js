//7 kyu Testing 1-2-3
//Your team is writing a fancy new text editor 
//and you've been tasked with implementing the line numbering.
//Write a function which takes a list of strings and returns
// each line prepended by the correct number.
//The numbering starts at 1. 
//The format is n: string. Notice the colon and space in between.
//[] --> []

//PARAMETERS: an array of varying length containing string values

//RESULT: an array of strings containing the original values with the 
//        line number and a colon + space in front

//EXAMPLES:
//  (Input --> Output)
//  assert.deepEqual(number([]), [], 'Empty array should return empty array');
//  assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

//PSEUDOCODE 
//  Iterate over the array and prepend 
//  by the correct number, starting at 1.
//  Each number should have a colon with a
//  space between the colon and the list value.



let number = (arr) => arr.map((v, i) => `${i + 1}: ${v}`)






