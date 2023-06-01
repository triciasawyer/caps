'use strict';


const { io } =  require('socket.io-client');
const socket =  io('http://localhost:3001/caps');
const Chance = require('chance');

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
    socket.emit('pickup', payload);
};


const thankDriver = (payload) => console.log('Vendor: Thank you for placing your order', payload.customer);

const orderMessage = (payload) => {
    setTimeout(() => {
        thankDriver(payload);
    }, 1000);
};


module.exports = { orderPackage, orderMessage, thankDriver };

