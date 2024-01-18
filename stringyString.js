//PARAMETER: Given an integer size
//           return a string
//RESULT: Write a function that takes a
//          integer size and returns a sequence
//          of that size of 1s and 0s.
//EXAMPLE: A string with the size 6 return: '101010'
//PSEUDOCODE: create a loop that repeats as
//             many times as the given size integer
//             concat an empty string with 1s or 0s
//             during each interaction of the loop
function stringy(size) {

    let result = '';
  for (let i = 1; i <= size; i++) {
    result += i % 2;
  }
  return result;
} 
//anouther solution 2nd most clever, not mine
const stringy = size => "10".repeat(size).slice(0,size);