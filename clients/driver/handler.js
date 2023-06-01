'use strict';


const eventEmitter = require('../eventEmitter');


const pickupPackage = (payload) => {
  console.log('Driver: picked up', payload.orderId);
  eventEmitter.emit('In transit', payload);
};


const transitPackage = (payload) => {
  setTimeout(() => {
    eventEmitter.emit('Package delivered', payload);
  }, 3000);
};


const deliverPackage = (payload) => {
  console.log('Driver: delivered', payload.orderId);
  eventEmitter.emit('delivered', payload);  
};


module.exports = { pickupPackage, transitPackage, deliverPackage };