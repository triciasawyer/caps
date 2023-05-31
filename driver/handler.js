'use strict';


const eventEmitter = require('../eventEmitter');


const pickupPackage = (payload) => {
  setTimeout(() => {
    console.log('Driver: picked up', payload.orderId);
    eventEmitter.emit('Package pickedup', payload);  
  }, 3000);
};


const transitPackage = (payload) => {
  setTimeout(() => {
    eventEmitter.emit('In transit', payload);
  }, 3000);
};


const deliverPackage = (payload) => {
  setTimeout(() => {
    console.log('Driver: delivered', payload.orderId);
    eventEmitter.emit('delivered', payload);  
  }, 3000);
};


module.exports = { pickupPackage, transitPackage, deliverPackage };