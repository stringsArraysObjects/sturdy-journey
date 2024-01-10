//PARAMETERS: keep the original order of the names 
//              in the output.
//RESULT: Make a program that filters a list of 
//          strings and returns a list with only 
//          your friends name in it.
//EXAMPLE: Input = ["Ryan", "Kieran", "Jason", "Yous"], 
//         Output = ["Ryan", "Yous"]
//PSEUDOCODE: filter names that are 4 letters long.
//             
//
//
//
function friend(friends){
    return friends.filter(item => item.length == 4)
   }