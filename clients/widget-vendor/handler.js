'use strict';

var Chance = require('chance');
var chance = new Chance();


const createdOrder = (socket, payload = null) => {
  if(!payload){
    payload = {
      store: 'acme-widgets',
      orderId: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }


  socket.emit('Join', payload.store);
  console.log(`Vendor: Order #: ${payload.orderId} ready for pickup.`);
  socket.emit('pickup', payload);
};
  
  
const packageDelivered = (payload) => {
  console.log(`Vendor: Thank you for placing your order ${payload.customer}`);
};
  

module.exports = { createdOrder, packageDelivered }; 