// PARAMETERS: non-negative number
// RESULT:     return the digits of the array
//             in reversed order.
// EXAMPLE:    35231 => [1,3,2,5,3]
// PSEUDOCODE: interate through the array backwards.


function digitize(n) {
    return String(n).split('').map(Number).reverse()
}