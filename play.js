const connect = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
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

module.exports = {setupInput};






// handleUserInput should check for the ctrl + c input and terminate the game. 
//Run the code to ensure that there are no errors and that we can terminate the game using ctrl + c.