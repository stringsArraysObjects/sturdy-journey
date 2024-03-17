//PARAMETERS: The maximum time never exceeds 359999 (99:59:59)
//RESULT:Write a function, which takes a non-negative integer 
//       (seconds) as input and returns the time in a human-readable 
//       format (HH:MM:SS).
//EXAMPLE: HH = hours, padded to 2 digits, range: 00 - 99
//         MM = minutes, padded to 2 digits, range: 00 - 59
//         SS = seconds, padded to 2 digits, range: 00 - 59
//PSEUDOCODE: Take in integer and divide
//            by 60 the appropriate amount 
//            of times and assign the result
//            to hours, minutes, and seconds.
//            Pad leading zeros where needed, and 
//            print hours, minutes, seconds with
//            with a colon between them.

function humanReadable (seconds) {
   var pad = function(x) {return (x < 10) ? '0'+x : x; }
   return pad(parseInt(seconds / (60*60))) + ':' +
          pad(parseInt(seconds / 60 % 60)) + ':' +
          pad(seconds % 60)
  }