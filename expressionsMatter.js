//PARAMETERS:  the maximum value that you can obtain is 9.
//RESULT:      given three integers a ,b ,c, return the largest 
//             number obtained after inserting the following operators and brackets: +, *, ()
//EXAMPLE:     1 * (2 + 3) = 5
//PSEUDOCODE:  use the math.max static method to return the 
//             the max value


function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }