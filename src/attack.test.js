const attack = require('./attack');

test('should return damage sentence', () => {
  const result = attack('Ogre', 25);

  expect(result).toBe('Ogre dealt 21 damage!');
});
