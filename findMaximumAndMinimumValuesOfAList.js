//PARAMETER: whole numbers
//RESULT: return the largest and lowest number in the array.
//EXAMPLE: [4,6,2,1,9,63,-134,566] -> max = 566, min = -134
//PSUEDOCODE: sort the array in ascending order
//           return the element at index 0 as min
//            return the element at  index length - 1 as max
//




var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}

//other solution not mine
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);