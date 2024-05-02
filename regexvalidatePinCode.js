//EXAMPLE:  "1234"   -->  true
//          "12345"  -->  false
//          "a234"   -->  false

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }