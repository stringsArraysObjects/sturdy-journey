//PARAMETER: Take a non-negative integer as an argument
//            rearrange the digits to create the highest possible number.
//RESULT:   return the digits in descending order.
//EXAMPLE: 
//          Input: 42145 Output: 54421
//          Input: 145263 Output: 654321
//          Input: 123456789 Output: 987654321
//PSEUDOCODE: sort the digits to make the highest
//            value.
//
function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''));
  }