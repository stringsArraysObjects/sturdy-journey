//PARAMETER:    Input will consist of a list of pairs. 
//              Each pair contains information for a single potential member. 
//              Information consists of an integer for the person's age and an 
//              integer for the person's handicap.
//RESULT:       Output will consist of a list of string values 
//              stating whether the respective member is to be placed in the senior or open category.
//EXAMPLE:      input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//              output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//PSEUDOCODE:   use map to create a new array with the corresponding string based
//              on a control statement.


function openOrSenior(data){
    return data.map( (c) => (c[0] >= 55 && c[1] > 7) ? "Senior" : "Open" )
  }