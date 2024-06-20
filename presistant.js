
//PARAMETERS:   Positive parameter num 
//RESULT:       returns its multiplicative persistence
//EXAMPLE:
//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
//999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
//4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

//PSEUDOCODE:   Initialize counter for persistence  
//              return a string representing the num value
//              in order to use the length data property of a String value
//              to use as in the while loop condition
//              Loop until a single digit is reached
//              increment the count 
//              split the string into an array by the given delimiter 
//              invoke the reduce method to combine each element by multiplication



function persistence(num) {
    let persistenceCount = 0;
    
    while (num.toString().length > 1) {
        persistenceCount++;
        num = num.toString().split('').reduce((acc, digit) => acc * digit, 1);
    }
    return persistenceCount;
}

//voted most clever, I like how they used the iterative map() method on the Number function that is creative.
function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }