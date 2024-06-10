//PARAMETERS:   The array will always have at least 2 elements1 and all elements will be numbers
//              The numbers will also all be unique and in ascending order
//              The numbers could be positive or negative and the first non-consecutive could be either too
//RESULT:       find the first element of an array that is not consecutive.
//              If the whole array is consecutive then return null2.
//EXAMPLE:      [1,2,3,4,6,7,8] 6 is the first non-consecutive number.
//PSEUDOCODE:   iterating over the array comparing each element to the next element. 
//              If the current element is not one less than the next element, 
//              then the function returns the next element. 
//              If the function reaches the end of the array without finding a 
//              non-consecutive element, then it returns null.



function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

  function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}

firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1))