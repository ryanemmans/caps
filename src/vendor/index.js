'use strict';

const client = require('socket.io-client');
const caps = client('http://localhost:3030/caps');
const logDelivery = require('./log-delivery.js');
const faker = require('faker');

caps.on('delivered', logDelivery);

function pickup(storeName) {
  let payload = {
    store: storeName,
    orderID: faker.random.alphaNumeric(15),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  caps.emit('pickup', payload);
}

pickup('1-800-flowers');
