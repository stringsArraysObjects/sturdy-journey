/*PARAMETER: accum is a string which 
             includes only letters from a..z and A..Z.
*RESULT:  a string that the characters repeat based on 
          their index.  And the first letter of each
          character is uppercase.
*EXAMPLE: accum("abcd") -> "A-Bb-Ccc-Dddd"
          accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
*PSUEDOCODE: repeats a character the same number of times as its index 
             and the first letter is uppercase.
*/
function accum(s) {
	var answer = []
  s.split("").forEach( (letter, idx) => {
    var segment = ""
    segment += letter.toUpperCase()
    while (idx > 0 ){
      segment += letter.toLowerCase()
      idx -= 1
    }
    answer.push(segment)
  })
 return answer.join("-")
}
//most clever
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
// I like that they used the push method
function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}