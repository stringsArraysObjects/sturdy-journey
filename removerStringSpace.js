//PARAMETER: 
//RESULT:   Write a function that removes the 
//          spaces from the string, then return 
//          the resultant string.
//EXAMPLE: Input -> Output
//         "8aaaaa dddd r     " -> "8aaaaaddddr"
//PSEUDOCODE: remove the whitespace

function noSpace(x){
    return x.split(' ').join('')
}

function noSpace(x){
    return x.replace(/\s/g, '');
  }