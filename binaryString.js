//PARAMETER:    toString not allowed
//RESULT:       Given a positive (or 0) number, 
//              return a string of 1's and 0's 
//              representing it's binary value 
//EXAMPLE:      toBinaryString(6)
//              should return "110" (no leading 0). 
   

function toBinaryString(number){
    var r = '';
    do {
      r = (number & 1) + r;
      number >>= 1;
    } while(number);
    return r;
  }