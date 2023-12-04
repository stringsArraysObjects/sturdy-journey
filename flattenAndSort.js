//PARAMETERS: 
//
//RESULT: return the flattened version of the array with 
//        all the integers in the sorted (ascending) order.
//EXAMPLE: Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], 
//          your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//
//PSEUDOCODE: merge the two-dimensional array of integers
//            than sort in lowest to highest order (ascending).
//
"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a-b)
  
}
flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])