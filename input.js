let connection; // Stores the active TCP connection object.
//Our input module can now use the connection variable to send movement commands/messages to the server.

const handleUserInput = ((key) => {
  // process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'g') {
  connection.write("Say: Go!");
  }
});

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};


// let handleUserInput = setupInput();

// handleUserInput.on('data', (key) => {
//   // process.stdout.write('.');
//   if (key === '\u0003') {
//     process.exit();
//   } else if (key === 'w') {
//     console.log("W is pressed hahaha, game over...");
//   }
// });


module.exports = {setupInput};