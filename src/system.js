'use strict';

const eventEmitter = require('../index.js')

const driver = require('./driver.js')
const vendor = require('./vendor.js')


eventEmitter.on('message', (payload) => {
  console.log('Order Recieved', payload.event);
})

eventEmitter.emit('Ready for Pickup', driver);
