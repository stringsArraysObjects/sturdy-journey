//PARAMETER: solution must use the map() function
//RESULT:    make a new array with each value twice as large as
//           the corresponding value in the passed in array.
//EXAMPLE:   var someNumbers = [1,2,10,57];
//           double(someNumbers); // should return [2,4,20,114]  
//PSEUDOCODE: use the map() method of Array instances creates a new array
//            populated with the results of every value being twice as 
//            large as the corresponding value in the passed in array.

function double(array) {
    return array.map(n => n+n)
}