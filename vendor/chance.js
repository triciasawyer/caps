'use strict';


let Chance = require('chance');

let chance = new Chance();

const payload = {
  store: chance.company(),
  orderId: chance.guid(),
  customer: chance.name(),
  address: chance.address(),

};


module.exports = payload;