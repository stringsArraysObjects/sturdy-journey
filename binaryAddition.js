//PARAMETER: binary number returned should be a string
//           coversion can be done before, or after the addition
//RESULT:    implement a function that adds tow numbers together
//           and returns their sum in binary.
//EXAMPLE:   1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//
//PSEUDOCODE: sum the given interger values,
//            convert to binary,
//            return as a string


function addBinary(a,b){
    return (a+b).toString(2)
  }