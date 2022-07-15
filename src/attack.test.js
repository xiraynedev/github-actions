const attack = require('./attack');
const criticalAttack = require('./criticalAttack');

test('should return damage sentence', () => {
  const result = attack('Ogre', 25);
  const criticalResult = criticalAttack('Ogre', 25);

  expect(result).toBe('Ogre dealt 21 damage!');
});
