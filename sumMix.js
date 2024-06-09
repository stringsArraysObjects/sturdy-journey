//PARAMETER:
//RESULT:  return the sum of the array values as if all were numbers.
//EXAMPLE: [9, 3, '7', '3']), 22);

//PSUEDOCODE:   
//              use the reduce method to combine each element by addition and the number method
//              to covert the strings to integers and return a single value.
//
//              use the map method to call the Number function for each element of the array 
//              and return an array of all numbers that will be added together by using the reduce 
//              method.
//
//


function sumMix(x){
    return x.reduce((acc,c)=> Number(acc) + Number(c), 0)
    }
    
function msumMix(x){
 return x.map(x=>Number(x)).reduce((a,b)=>a+b);
}

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}