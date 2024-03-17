//PARAMETERS:
//RESULT:
//EXAMPLE:
//PSEUDOCODE: tally x's in string
//            tally o's in string
//            return a boolean expression
//            that provides the result of
//            equal or not equal.
//
//




function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }