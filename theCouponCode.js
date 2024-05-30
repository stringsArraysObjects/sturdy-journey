//PARAMETERS:   dates passed as strings "Month Date, Year"
//RESULT:       a function which verfifies that a coupon
//              code is valid and not expired. 
//EXAMPLE:      checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") ===  true
//PSEUDOCODE:   convert string to integer 
//              use relational operator to verify coupon code              
//              use a equality operator to determine if coupon has expired
//              use a conditional operator for overall validation
//              All within in a ternary expression

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }

  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }