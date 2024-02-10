/*PARAMETERS: DNA strans are never empty or there is no 
*             DNA at all.
*RESULT:      the function receives one side of the DNA.
*             you need to return the other complementary side.             
*EXAMPLE:     (input --> output) 
*             "ATTGC" --> "TAACG"
*             "GTAT" --> "CATA"
*PSEUDOCODE:   iterate over each char of dna stran
*              create a new string stran
*              with the complementary character.
*/

function dnaStrand(dna){
    let comp = ''
    let rDNA = dna.split('')
       rDNA.forEach((item, index, array) => {
            switch(item) {
          case "A": comp += "T";break;
          case "T": comp += "A";break;
          case "C": comp += "G";break;
          case "G": comp += "C";break;
        }
         
       });
       return comp;
 }
//someone elses solution that i thought was very clever
function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
  }
