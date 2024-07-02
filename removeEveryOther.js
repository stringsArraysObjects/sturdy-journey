//PARAMETER:    None of the arrays will be empty
//RESULT:       Remove every second element from the array. 

// EXAMPLE:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//PSEUDOCODE: use the filter method to create a shallow copy that has every second index removed.

function removeEveryOther(arr) {
    return arr.filter(function(_, index) {
      return !(index % 2);
    });
  }