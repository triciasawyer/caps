'use strict';

var Chance = require('chance');
var chance = new Chance();


const createOrder = (socket, payload = null) => {
  if(!payload){
    payload = {
      store: '1-800-flowers',
      orderID: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }



  socket.emit('Join', payload.store);
  console.log(`Vendor: Order #:${payload.orderID} ready for pickup.`);
  socket.emit('pickup', payload);
};
  
  
const packageDelivered = (payload) => {
  console.log(`Vendor: Thank you for placing your order ${payload.customer}`);
};
  

module.exports = { createOrder, packageDelivered }; 