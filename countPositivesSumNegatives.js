//PARAMETERS: 0 is neither positive nor negative.
//            If the input is an empty array or is null, 
//            return an empty array.
//RESULT: Given an array of integers. 
//        Return an array, where the first 
//        element is the count of positives numbers and 
//        the second element is sum of negative numbers. 
//Example:
//      For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//PSEUDOCODE: Use a conditional statement to check for empty or null arrays
//            forEach() method to execute a function that evaluates each element
//            in the array to be either postive or negative.
//            Using a ternany operator if true/positive add to index 0 in the array, 
//            false/negetive add values to index 1.      


function countPositivesSumNegatives(input) {
    if(input === null || input.length < 1) return [];
    let r = [0,0];
    input.forEach(function(e) {
        (e>0) ? r[0]++ : r[1] += e;
    });
    return r;
}
function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
    var sum = 0, count = 0;
    input.forEach(function(el){ if (el > 0) count++; else sum+=el});
    return [count, sum];
  }