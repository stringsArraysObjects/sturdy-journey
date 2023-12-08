//PARAMETER: Passed a string 
//RESULT:   Returns true if the first argument(string) 
//          passed in ends with the 2nd argument (also a string).
//EXAMPLE:  solution('abc', 'bc') // returns true
//          solution('abc', 'd') // returns false
//PSEUDOCODE:   check if string A  ends with element/s of string b.  
//              if found return true if not return false.

function solution(str, ending){
    
    return str.endsWith(ending);
  }