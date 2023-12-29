//PARAMETER: The number will always be a positive integer 
//           greater than 0.
//RESULT: return the result of summing numbers
//EXAMPLE: 2 -> 3 (1 + 2)
//         8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
//PSEUDOCODE: iterate over 1 through nth number
//              return the sum.

function summation (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    
    return sum;
  }