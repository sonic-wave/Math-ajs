import Daemon from '../Daemon';

test('test 100 damage w stoned debuf', () => {
  const daemon = new Daemon('Dante', null, 2);
  daemon.attack = 100;
  daemon.stoned = true;

  const result = 85;

  expect(daemon.attack).toBe(result);
});

test('test daemon 100 damage without stoned debuf', () => {
  const daemon = new Daemon('Dante', null, 2);
  daemon.attack = 100;
  daemon.stoned = false;

  const result = 90;

  expect(daemon.attack).toBe(result);
});

test('test stoned debuf method', () => {
  const daemon = new Daemon('Dante', null, 2);
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
});
