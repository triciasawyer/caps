'use-strict';


const eventEmitter = require('../eventEmitter');
const { pickupPackage, transitPackage, deliverPackage } = require('./handler');






eventEmitter.on('Package pickedup', pickupPackage);
eventEmitter.on('In transit', transitPackage);
eventEmitter.on('Package delivered', deliverPackage);
