'use strict';


const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const { createdOrder, packageDelivered } = require('./handler');
const store = '1-800-flowers';


socket.emit('Join', store);

socket.emit('getAll', {queueId: store});


setInterval(() => {
  createdOrder(socket);
}, 3000);


socket.on('delivered', (payload) => {
  packageDelivered(payload);
  socket.emit('received', payload);
});