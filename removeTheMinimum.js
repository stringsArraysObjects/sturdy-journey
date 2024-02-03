//PARAMETERS: do not mutate the original array/list
//              if there are multiple elements with
//              the same value, remove the one with
//              a lower index. If you get an empty
//              array/list, return an empty array/list
//              don't change the order of the elements
//              that are left.
//RESULT:       given an array of integers, remove the smallest
//              value.
//EXAMPLE:      Input: [2,2,1,2,1], output = [2,2,2,1]
//

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }