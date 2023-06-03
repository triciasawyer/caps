'use strict';

var Chance = require('chance');
var chance = new Chance();

const store = 'acme-widgets';
const createdOrder = (socket, order = null) => {
  if(!order){
    order = {
      store,
      id: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }


  let payload = {
    event: 'pickup',
    messageId: order.id,
    queueId: store,
    order,
  };


  socket.emit('Join', payload.queueId);
  console.log(`Vendor: Order #: ${payload.messageId} ready for pickup.`);
  socket.emit('pickup', payload);
};
  
  
const packageDelivered = (payload) => {
  console.log(`Vendor: Thank you for placing your order ${payload.order.customer}`);
};
  

module.exports = { createdOrder, packageDelivered }; 