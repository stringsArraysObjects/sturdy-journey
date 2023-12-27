//PARAMETER: the tests will alsways use some 
//           integral number.
//RESULT:    true if it is a perfect square
//           false if it is not a perfect square
//EXAMPLE:   -1  =>  false
//           0  =>  true
//           3  =>  false
//PSEUDOCODE: get the square root of the number
//            if the square root is a whole number
//            then it is a perfect square.

function isSquare(n){
    return Math.sqrt(n) % 1 === 0 ? true : false
  }

//or
function isSquare(n){
    return Math.sqrt(n) % 1 === 0;
  }