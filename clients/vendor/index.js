'use strict';


const { orderPackage, orderMessage } = require('./handler');
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

// starts the event cycle, pickup emit is inside the orderPackage
setInterval(() => {
    socket.emit('Package available');
}, 5000);


socket.on('Package available', orderPackage);
socket.on('delivered', orderMessage);

