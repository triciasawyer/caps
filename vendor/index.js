'use strict';


const eventEmitter = require('../eventEmitter');
const { orderPackage, orderMessage } = require('./handler');


// starts the event cycle, pickup emit is inside the orderPackage
setInterval(() => {
    orderPackage();
}, 3000);


eventEmitter.on('Package available', orderPackage);
eventEmitter.on('delivered', orderMessage);

