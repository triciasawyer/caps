'use strict';


const Chance = require('chance');
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
    console.log('Vendor: Order ready for pickup', payload);
    eventEmitter.emit('pickup', payload);
};


const thankDriver = (payload) => console.log('Vendor: Thank you for placing your order', payload.customer);

const orderMessage = (payload) => {
    setTimeout(() => {
        thankDriver(payload);
    }, 1000);
};


module.exports = { orderPackage, orderMessage, thankDriver };

