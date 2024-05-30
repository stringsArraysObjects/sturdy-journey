//Your task is to construct a building which will be a pile of n cubes. 
//The cube at the bottom will have a volume of 
//3n 3, the cube above will have volume of (−1)3(n−1) 3 
//and so on until the top which will have a volume of 131 3.

function findNb(m) {
    let n = 0;
    let sum = 0;
    while (sum < m) {
      n++;
      sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
  }

  function findNb(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
      return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}