'use-strict';


const eventEmitter = require('../eventEmitter');
const { pickupPackage, deliverPackage } = require('./handler');

eventEmitter.on('Package pickedup', pickupPackage);
eventEmitter.on('Pickup: in-transit', pickupPackage);
eventEmitter.on('Package delivered', deliverPackage);
eventEmitter.on('Delivery: in-transit', deliverPackage);