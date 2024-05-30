//PARAMETERS:
//RESULT:   If the word's length is odd, return the middle character. 
//          If the word's length is even, return the middle 2 characters.
//EXAMPLE:  getMiddle("test") should return "es"
//PSEUDOCODE:   str.substr(start, length)

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}