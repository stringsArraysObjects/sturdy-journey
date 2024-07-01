//PARAMETERS: If a or b are null return false.
//RESULT: write a function comp(a, b) (orcompSame(a, b)) 
//        that checks whether the two arrays have the "same" elements, 
//        "same" means, here, that the elements in b are the elements 
//         in a squared, regardless of the order.
//EXAMPLES:
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//PSEUDOCODE:
//          check for arrays with null value, if so return false.
//          sort the arrays.
//          use the iterative map method to square each element in array1
//          use the iteractive every() method to compare each value at each index are equal returns a boolean value.


function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
function comp(array1, array2) {
    if (array1 === null || array2 === null) {
      return false;
    }
    if (array1.length === 0 && array2.length === 0) {
      return true;
    }
    var array1Squared = array1
      .map(function (x) {
        return x * x;
      })
      .sort(function (a, b) {
        return a - b;
      });
    var array2Sorted = array2.sort(function (a, b) {
      return a - b;
    });
    return JSON.stringify(array1Squared) === JSON.stringify(array2Sorted);
  }


  function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
  }