//PARAMETER: Ignore letter case, has no repeating letters,
//           assume the empty string is an isogram.
//RESULT:    declare a function that determines whether
//           a string that contains only letters is an isogram.
//EXAMPLE:   "Dermatoglyphics" --> true
//           "aba" --> false
//           "moOse" --> false (ignore letter case)


function isIsogram(str){
    const charSet = new Set(str.toLowerCase());
      return charSet.size === str.length;
  }