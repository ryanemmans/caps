'use strict';

function handlePickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
}
function handleDelivery(payload) {
  console.log(`DRIVER: delivered ${payload.orderID}`);
}

module.exports = { handlePickup, handleDelivery };
