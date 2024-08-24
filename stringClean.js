//PARAMETERS: 
//RESULTS: return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
//EXAMPLES: '! !'                 -> '! !'
//          '123456789'           -> ''
//          'This looks5 grea8t!' -> 'This looks great!'
//PSEUDOCODE: use the replace method to return a new string
//            with all numbers replaced with a space. 
//            use regex to define the pattern of numbers to replace
//            [0-9]: Matches any character between the brackets, including 
//            any numbers or span of numbers from 0 to 9
//            g: specifies a global match, which finds all matches, not just the first

function stringClean(s){
    return s.replace(/[0-9]/g, '');
  }