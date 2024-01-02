//PARAMETER: given two integers a and b
//           which can be positive or negative
//           a and b are not ordered
//           if the two numbers are equal
//           return a or b.
//RESULT:    return the sum of all the integers
//           between and including a and b.
//EXAMPLE:   (1, 0) --> 1 (1 + 0 = 1)
//           (1, 2) --> 3 (1 + 2 = 3)
//PSEUDOCODE: use an algorithm to find the midpoint
//            between two numbers, a and b.
//            multiple by the sum of a and b.
           

 

function getSum( a,b ) {
    return (a + b) * (Math.abs(a - b) + 1) / 2
    }