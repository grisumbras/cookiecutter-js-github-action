const core = require('@actions/core');


async function run() {
  const first = core.getInput('first');
  console.log(`First ${first}!`);
  core.setOutput('out', first);
}


module.exports = run;
