'use strict';

const eventEmitter = require('../eventEmitter');
let chance = new Chance();

const orderPackage = (payload = null) => {
    if (!payload) {
        payload = {
            store: chance.company(),
            orderId: chance.guid(),
            customer: chance.name(),
            address: chance.address(),
        };
    }
    console.log('Vendor order: Ready for pickup', payload);
    eventEmitter.emit('Package available', payload);
};


const thankDriver = (payload) => console.log('Vendor: Thank you for placing your order', payload.customer);


const orderMessage = (payload) => {
    setTimeout(() => {
        thankDriver(payload);
    }, 1000);
};


module.exports = { orderPackage, orderMessage, thankDriver };

