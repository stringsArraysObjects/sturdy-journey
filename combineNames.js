/*
*PARAMETERS: none
*RESULT:    combine two strings with a space between them.
*EXAMPLE:   combineNames('James', 'Stevens')
*           returns: 'James Stevens'
*PSEUDOCODE: use template literals, which allows
             for string interpolation with embedded expressions.
 */


function combineNames (first,last) {
   return `${first} ${last}`;
}
  

const combineNames = (...names) => names.join(' ');  

const combineNames = (a, b) => `${a} ${b}`;
