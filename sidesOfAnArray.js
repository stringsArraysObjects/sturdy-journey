//PARAMETERS:   input: An integer array of length 0 < arr < 1000. 
//              The numbers in the array can be any integer positive or negative.
//              Output:The lowest index N where the side to the left of N is equal 
//              to the side to the right of N. If you do not find an index that fits 
//              these rules, then you will return -1.
//              Note: If you are given an array with multiple answers, return the lowest correct index.
//RESULT: 
//EXAMPLE:
//PSEUDOCODE:   Loop through array
//              reduce left and right of each index
//              get the subset array on each side of index


const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));