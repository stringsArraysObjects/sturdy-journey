//PARAMETER
//RESULT:   given a string turn each char into its ASCII
//          char code and join them together, then replace 
//          any incidence of the number 7 with the number 1
//          return the sum of the difference between total1
//          and total2.
//      
//EXAMPLE: total1 = 656667
//                       ^
//         total2 = 656661
//                       ^
//PSEUDOCODE:   map to create a new array of numbers
//              return to a string 
//              split to convert to an array
//              filter out the 7



function calc(x){
    return [...x].map(e=>e.charCodeAt(0))
                 .join('')
                 .split('')
                 .filter(n => n == 7)
                 .length * 6;
}