//PARAMETERS: check for bad values like null/undefined
//RESULT:   a function that counts the number of sheep present in the array (true means present).
//EXAMPLE:  true,  true,  true,  false,
//          true,  true,  true,  true ,
//          true,  false, true,  false,
//          true,  false, false, true ,
//          true,  true,  true,  true ,
//          false, false, true,  true]
//          The correct answer would be 17.
//PSEUDOCODE: The filter() method creates a new array containing only the elements from arrayOfSheeps that pass a specific test. 
//        
// filter(), uses the boolean value to test each element in arrayOfSheeps. Falsy values like false, 0, null, undefined, "" (empty string),
// and NaN are removed. Only truthy values remain in the new array.
// use length: to return the number of elements in the filtered array.

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }