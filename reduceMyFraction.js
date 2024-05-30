//PARAMETERS: only positive numbers
//RESULT:     write a function that reduces fractions to their
//            simplest form.
//EXAMPLE:    input:   [numerator, denominator]
//            output:  [reduced numerator, reduced denominator]
//            example: [45, 120] --> [3, 8]
//

const gcd = (a, b) => b ? gcd(b, a % b) : a;

const reduce = ([a, b]) => {
  let d = gcd(a, b);
  return [a / d, b / d];
};