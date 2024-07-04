//PARAMETER:
//RESULT:    determine if the hero has enough bullets to defeat the dragons. 
//EXAMPLE:
// assert.strictEqual(hero(100, 40), true);
// assert.strictEqual(hero(1500, 751), false);
// assert.strictEqual(hero(0, 1), false);
//PSEUDOCODE: use a relational operator to evaluate the ratio of bullets to dragons.

function hero(bullets, dragons){
    return bullets >= dragons * 2;
  }