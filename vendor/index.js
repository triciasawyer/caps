'use strict';


const eventEmitter = require('../eventEmitter');
const { orderPackage, orderMessage } = require('./handler');

eventEmitter.on('Package available', orderPackage);
eventEmitter.on('Order recieved', orderMessage);

