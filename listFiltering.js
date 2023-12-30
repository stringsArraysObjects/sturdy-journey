//PARAMETERS: list of non-negative integers
//RESULT: return a new list with the strings 
//          filtered out.
//EXAMPLE:  filter_list([1,'a','b',0,15]) == [1,0,15]
//PSEUDOCODE: Identify the string elements in the array
//            Filter out the string elements.
//            Return a new array with only integers.




function filter_list(l) {
    return l.filter(x => typeof x === 'number');
  }