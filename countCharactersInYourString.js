//PARAMETER: if the string is empty then the result
//           should be empty object literal, {}.
//RESULT:   The main idea is to count all the occurring 
//          characters in a string. If you have a string 
//          like aba, then the result should be {'a': 2, 'b': 1}
//EXAMPLE:  


const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

//
const count = require('lodash').countBy;