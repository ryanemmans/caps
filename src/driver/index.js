'use strict';

const client = require('socket.io-client');
const caps = client('http://localhost:3030/caps');
const { handlePickup, handleDelivery } = require('./driver-handlers.js');

caps.on('pickup', payload => {
  handlePickup(payload);
  caps.emit('in-transit', payload);
  handleDelivery(payload);
  caps.emit('delivered', payload);
});
