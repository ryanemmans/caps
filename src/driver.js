'use strict';

const eventEmitter = require('../index.js');

eventEmitter.on('pickup', (payload) => {
  eventEmitter.emit(payload, 'pickup')
  console.log(`DRIVER: picked up ${payload.orderId}`)

  eventEmitter.emit(payload, 'in-transit')

  console.log(`DRIVER: delivered ${payload.orderId}`)
  eventEmitter.emit(payload, 'delivered')
});
