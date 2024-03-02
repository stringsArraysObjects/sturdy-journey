//PARAMETER: there will alsways be only one 
//            integer that appears an odd number
//            of times.
//RESULT:  given an array of integers, find the one 
//         integer that appears an odd number of times.
//EXAMPLE: [7] should return 7, because it occurs 1 time (which is odd).
//         [0] should return 0, because it occurs 1 time (which is odd).
//         [1,1,2] should return 2, because it occurs 1 time (which is odd).
//
function findOdd(A) {
    let res = 0
    for (let i=0; i < A.length; i++)
      res = res ^ A[i];
    return res;
  }

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);