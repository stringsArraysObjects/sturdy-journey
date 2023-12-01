// 8 kyu
//PARAMETERS: Given an array of integers your solution should find the smallest integer.
// RESULT: return the smallest integer
// EXAMPLE:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
//PSEUDOCODE: a couple possible solutions
//  1.sort the array in ascending order return the element at the 0 index
//  2. Use Math.min() [is a static method returns the smallest of the numbers given as input parameters] and 
//     the spread (...) operator allows an iterable, such as an array to be expanded in places where zero or more arguments 
//      (for function calls) or elements (for array literals) are expected.
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}