// PARAMETERS: You may assume the argument is non-negative.
// RESULT:     Finds the next integral perfect square after the one passed as a parameter.
//             If the argument is itself not a perfect square then return either -1.
// EXAMPLE:(Input --> Output)
//          121 --> 144
//          625 --> 676
//          114 --> -1 since 114 is not a perfect square
//PSEUDOCODE: declare two variables
//            checks if the square root of the number sq is an integer. 
//            calculate the square root of the input number using the Math.sqrt() method


function findNextSquare(sq) {
    var root1;
    var nextroot;
    if (Math.sqrt(sq)%1 === 0){
      root1=Math.sqrt(sq)
      nextroot= root1 +1
     return nextroot * nextroot }
    else {
    return -1;
  }
    }




function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }