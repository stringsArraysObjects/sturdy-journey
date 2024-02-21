//PARAMETERS: For 4 or more names, the number in "and 2 others" simply increases.
//RESULT: Implement the function that creates the text that should be displayed next 
//        the names of people that like an item.
//EXAMPLE: []-->  "no one likes this"
//         ["Peter"]   -->  "Peter likes this"
//         ["Jacob", "Alex"]  -->  "Jacob and Alex like this"
//         ["Max", "John", "Mark"]  -->  "Max, John and Mark like this"
//         ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//PSEUDOCODE:   based on the amount of elements(names) in the array
//              a specific text will be concatentated to the 
//              names to form a string output(print statement)


function likes(names) {
    switch (names.length) {
     case 0:return'no one likes this';break;
     case 1:return`${names[0]} likes this`;break;
     case 2:return`${names[0]} and ${names[1]} like this`;break;
     case 3:return`${names[0]}, ${names[1]} and ${names[2]} like this`;break;
     default: return`${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
   }
      
 }
//ranked most clever
 function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

//I thought was clever as well
let likes = ([a, b, ...c]) => c.length > 1 ? 
            `${a}, ${b} and ${c.length} others like this` : 
             c.length ? `${a}, ${b} and ${c[0]} like this` : 
             b ? `${a} and ${b} like this` : a ? `${a} likes this` : 
             `no one likes this`;