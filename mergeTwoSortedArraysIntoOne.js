//PARAMETERS: arr1 and arr2 are arrays with 
//              0 or more integers.
//RESULT:   merge them into a single one, 
//          sorted in asc order.
//EXAMPLE:  [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//PSEUDOCODE: combine the arrays using push or shift
//              sort the array using sort method.
function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10] )

//other solutions (not mine)
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }