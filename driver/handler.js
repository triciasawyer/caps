'use strict';


const eventEmitter = require('../eventEmitter');


const pickupPackage = (payload) => {
  setTimeout(() => {
    console.log('Driver: picked up', payload.orderId);
    eventEmitter.emit('Package pickedup', payload);
    eventEmitter.emit('Pickup: in-transit', payload);
  }, 2000);
  return 'Driver: picked up', payload.orderId;
};


const deliverPackage = (payload) => {
  setTimeout(() => {
    console.log('Driver: delivered', payload.orderId);
    eventEmitter.emit('Package delivered', payload);
    eventEmitter.emit('Delivery: in-transit', payload);
  }, 2000);
  return 'Driver: delivered', payload.orderId;
};




module.exports = { pickupPackage, deliverPackage };