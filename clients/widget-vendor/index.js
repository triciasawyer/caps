'use strict';


const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const { createdOrder, packageDelivered } = require('./handler');

socket.emit('getAll', {store: 'acme-widgets'});

setInterval(() => {
  createdOrder(socket);
}, 5000);


socket.on('delivered', (payload) => {
  packageDelivered(payload);
  socket.emit('received', payload);
});