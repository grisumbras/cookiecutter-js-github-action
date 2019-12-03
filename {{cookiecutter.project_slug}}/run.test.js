const run = require('./run');

test('run() runs', () => {
  return run().then(() => { return true; });
});
