'use strict';

const eventEmitter = require('../eventEmitter');


const orderPackage = (payload) => {
    setTimeout(() => {
        console.log('Vendor order:', payload);
        eventEmitter.emit('Package available', payload);
    }, 2000);
};


const orderMessage = (payload) => {
    setTimeout(() => {
        console.log('Thank you for placing your order', payload.customer);
        eventEmitter.emit('Order recieved', payload);    
    }, 2000);
};


module.exports = { orderPackage, orderMessage };

