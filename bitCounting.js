//PARAMETER: guarantee that input is non-negative.
//RESULT: Write a function that takes an integer as input,
//        and returns the number of bits that are equal to 
//        one in the binary representation of that number. 
//EXAMPLE: The binary representation of 1234 is 10011010010,
//         so the function should return 5 in this case
//PSEUDOCODE: return the number of one-bits in the two's complement
//            binary representation of the specified int value.

countBits = n => n.toString(2).split('0').join('').length;

var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };