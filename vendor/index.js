'use strict';


const eventEmitter = require('../eventEmitter');
const { orderPackage, orderMessage } = require('./handler');


setInterval(() => {
    orderPackage();
}, 3000);


eventEmitter.on('Package available', orderPackage);
eventEmitter.on('Order recieved', orderMessage);

