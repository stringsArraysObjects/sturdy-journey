//PARAMETERS:All numbers are valid Int32, no need to validate them.
//          There will always be at least one number in the input string.
//RESULT:   Output string must be two numbers separated by a single space, 
//          and highest number is first.
//EXAMPLE: highAndLow("1 9 3 4 -5"); // return "9 -5"
//PSEUDOCODE:  Convert to an array
//             Sort the array in ascending order
//             use the index to locate the highest and lowest number
//              or use Math.max and Math.min + template literals

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }


  function highAndLow(numbers){
    let arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }
  highAndLow("1 9 3 4 -5");

  