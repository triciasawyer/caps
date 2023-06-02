'use strict';


const { io } = require('socket.io-client');
const socket = io('http://localhost:300/caps');
const { createOrder, packageDelivered } = require('./handler');

socket.emit('getAll', { store: '1-800-flowers'});

setInterval(() => {
  createOrder(socket);
}, 3000);


socket.on('delivered', (payload) => {
  packageDelivered(payload);
  socket.emit('received', payload);
});