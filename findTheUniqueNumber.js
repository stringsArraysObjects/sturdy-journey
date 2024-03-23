//PARAMETERS: Guaranteed that array contains at lead 3 numbers.
//RESULT: Return the unique number in the array
//EXAMPLE: findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//         findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//PSUEDOCODE: sort, then compare the elments in the array

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }

  function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }