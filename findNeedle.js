//PARAMETER:   
//RESULT:   after your function finds the needle it should return
//          a message (as a string) that says:
//          "found the needle at position " plus the index it found the needle.
//Example:  (Input --> Output)
//          ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] -->
//          "found the needle at position 5" 
//PSEUDOCODE:use the array method indexOf to find the item
//           and return the index that it was found at. Then use
//           a template literal to display the string messege +
//           index returned by the method.

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
  }

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`; 