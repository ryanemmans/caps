'use strict';

const socketio = require('socket.io');
const PORT = process.env.PORT || 3030;
// Web Socket server
const server = socketio(PORT);
const logEvent = require('./log-event.js');
// socket.io namespace
const caps = server.of('/caps');

server.on('connection', socket => {
  console.log('Server Socket connected', socket.id);
});

caps.on('connection', socket => {
  console.log('Caps Socket connected', socket.id);
  // talk to particular socket
  socket.on('pickup', payload => {
    logEvent('pickup')(payload);
    // talk to all sockets
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', payload => {
    logEvent('in-transit')(payload);
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', payload => {
    logEvent('delivered')(payload);
    socket.broadcast.emit('delivered', payload);
  });
});
