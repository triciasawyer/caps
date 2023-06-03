'use strict';


const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const { createdOrder, packageDelivered } = require('./handler');
const store = 'acme-widgets';


// socket.emit('Join', store);

socket.emit('getAll', {store});

setInterval(() => {
  createdOrder(socket);
}, 5000);


socket.on('delivered', (payload) => {
  console.log('package is being delivered', payload);
  packageDelivered(payload);
  socket.emit('received', payload);
});