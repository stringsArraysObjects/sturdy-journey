
// PARAMETERS: Write a function that takes an array of strings as an argument
// RESULT: Returns a sorted array containing the same strings, ordered from shortest to longest.
// EXAMPLE: ["Telescopes", "Glasses", "Eyes", "Monocles"]
//           Your function would return the following array:
//          ["Eyes", "Glasses", "Monocles", "Telescopes"]
//PSEUDOCODE: sort multiple annoymous arrays of varying lengths in ascending order

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  };
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])