const net = require('net');
const { IP, PORT } = require('./constants');

// /https://web.compass.lighthouselabs.ca/days/w02d3/activities/883
//QUESTION 1 -- NOT IMPORTING IP AND PORT


/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
    // host: '135.23.222.131',
    // port: 50542,
  });

  // interpret incoming data as text
  conn.on("connect", function(){
    console.log('Successfully connected to game server');
    conn.write('Name:LMF');
    // setTimeout(() => {
    // conn.write('Move: up');
    // }, 50);
    // setInterval(() => {
    // conn.write('Move: up');
    // },1000);
    // setTimeout(() => {
    // conn.write('Move: right');
    // }, 50);
    // setInterval(() => {
    // conn.write('Move: right');
    // },3000);
    // setTimeout(() => {
    // conn.write('Move: down');
    // }, 50);
    // setInterval(() => {
    // conn.write('Move: down');
    // },3000);

  })
  
  conn.setEncoding('utf8'); 

  return conn;

}

// console.log('Connecting ...');
// connect();

module.exports = {connect};