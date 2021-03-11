const setupInput = require('./play');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

let handleUserInput = setupInput();

handleUserInput.on('data', (key) => {
  // process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    console.log("W is pressed hahaha, game over...");
  }
});