const {connect} = require('./client');
const {setupInput} = require('./input')

console.log('Connecting ...');
const setUp = connect();

setupInput(setUp);

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


module.exports = {setupInput};






// handleUserInput should check for the ctrl + c input and terminate the game. 
//Run the code to ensure that there are no errors and that we can terminate the game using ctrl + c.