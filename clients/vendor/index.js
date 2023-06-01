'use strict';


const { orderPackage, orderMessage } = require('./handler');
const eventEmitter = require('../eventEmitter');


// starts the event cycle, pickup emit is inside the orderPackage
setInterval(() => {
    eventEmitter.emit('Package available');
}, 5000);


eventEmitter.on('Package available', orderPackage);
eventEmitter.on('delivered', orderMessage);

