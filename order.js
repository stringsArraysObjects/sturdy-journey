//PARAMETER:  The words in the input String will only contain valid consecutive numbers.
//RESULT:     Write a function that given a string, with words
//            that contain numbers. Sort the words based on the numbers.
//EXAMPLE:    "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//PSEUDOCODE:






function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }