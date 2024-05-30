//PARAMETER: The input will be a non-negative integer.
//RESULT:   Given n, take the sum of the digits of n. 
//          If that value has more than one digit, 
//          continue reducing in this way until a 
//          single-digit number is produced.
//EXAMPLE: 16  -->  1 + 6 = 7
//         942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6



function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
  