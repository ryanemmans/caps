'use strict';

const eventEmitter = require('../index.js');
require('./system.js')
const faker = require('faker');

const store = faker.fake('{{company.companyName}}');
const id = faker.fake('{{random.uuid}}');
const timeStamp = faker.fake('{{time.recent}}')
const randomName = faker.name.findName();
const randomAddress = faker.fake('{{address.streetAddress}}, {{address.cityName}}, {{address.state}} {{address.zipCodeByState}}');


eventEmitter.emit('message', {
  'event':'pickup',
  'time':console.log(`${timeStamp}`),
  'payload': {
    'store':console.log(`${store}`),
    'orderID':console.log(`${id}`),
    'customer':console.log(`${randomName}`),
    'address':console.log(`${randomAddress}`),
  }
});
