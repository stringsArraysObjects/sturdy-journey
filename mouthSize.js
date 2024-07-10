//PARAMETERS: alligator (case-insensitive) 
//RESULT:     If animal is an alligator return small otherwise return wide.
//EXAMPLE:    assert.strictEqual(mouthSize("toucan"),"wide")
//            assert.strictEqual(mouthSize("ant bear"),"wide")
//            assert.strictEqual(mouthSize("alligator"),"small")
//PSEUDOCODE: use the conditional ternary operator 
//            to evaluate the statement and return the correct string.
//              



function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
  }