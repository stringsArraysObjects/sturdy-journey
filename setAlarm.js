//EXAMPLE: employed | vacation 
//         true     | true     => false
//         true     | false    => true
//         false    | true     => false
//         false    | false    => false

function setAlarm(employed, vacation){
    return employed > vacation
  }

  const setAlarm = (employed, vacation) => employed && !vacation; 