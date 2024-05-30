//PARAMETERS:
//RESULT:   Given two numbers and an arithmetic operator
//          (the name of it, as a string), return the result
//           of the two numbers having that operator used on them.



const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]);