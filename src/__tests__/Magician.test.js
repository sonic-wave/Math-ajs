import Magician from '../Magician';

test('test 100 damage w stoned debuf', () => {
  const magician = new Magician('Harry', null, 2);
  magician.attack = 100;
  magician.stoned = true;

  const result = 85;

  expect(magician.attack).toBe(result);
});

test('test magician 100 damage without stoned debuf', () => {
  const magician = new Magician('Harry', null, 2);
  magician.attack = 100;
  magician.stoned = false;

  const result = 90;

  expect(magician.attack).toBe(result);
});

test('test stoned debuf method', () => {
  const magician = new Magician('Harry', null, 2);
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
});
