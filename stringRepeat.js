//PARAMETERS: Accepts an integer [n] and a string [s]
//RESULT:     Returns a strong of [s] repeated
//            exactly [n] times.
//EXAMPLE:    6, "I"     -> "IIIIII"
//            5, "Hello" -> "HelloHelloHelloHelloHello"
//PSEUDOCODE: A loop that repeats a string n numbers of times
//            string prints out in a row 
function repeatStr (n, s) {
    return s.repeat(n);
  }          