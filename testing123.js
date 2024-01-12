//PARAMETER: The numbering starts at 1. The format is n: string. Notice the 
//           colon and space in between.
//RESULT:    Write a function which takes a list of strings and returns each line 
//           prepended by the correct number.
//EXAMPLE:   [] --> []
//           ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//PSEUDOCODE:  produce a ascending order of numbers
//             followed by a colon.  That following the
//             string sequence.

let number = arr => arr.map((v, i) => `${i + 1}: ${v}`);