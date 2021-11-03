'use strict';

function logDelivery(payload) {
  // log customer name from payload
  console.log(`Thank you, ${payload.customer}`);
}

module.exports = logDelivery;
