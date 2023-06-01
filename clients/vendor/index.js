'use strict';


const { orderPackage, thankDriver } = require('./handler');
const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');


// starts the event cycle, pickup emit is inside the orderPackage
socket.on('delivered', (payload) => {
    thankDriver(payload);
});

setInterval(() => {
    orderPackage(socket);
}, 3000);

