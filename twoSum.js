//PARAMETER: The input will always be valid 
//          (numbers will be an array of length 
//          2 or greater, and all of the items will
//          be numbers; target will always be the sum
//          of two different items from that array).
//RESULT:   Write a function that takes an array of 
//          numbers and a target number. It should find 
//          two different items in the array that, when 
//          added together, give the target value. The indices 
//          of these items should then be returned in a 
//          tuple / list like so: (index1, index2).
//EXAMPLE:  twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
    const seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
      let x = numbers[i], y = target - x;
      if (seen.has(y))
        return [seen.get(y), i];
      seen.set(x, i);
    }
  }

  function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}