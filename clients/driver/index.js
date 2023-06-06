'use-strict';


const { io } =  require('socket.io-client');
const socket =  io('http://localhost:3002/caps');
// const { pickupPackage, transitPackage, deliverPackage } = require('./handler');


socket.emit('Join', 'driver');


// to get all stored messages for the drive
socket.emit('getAll', {queueId: 'driver'});


socket.on('pickup', (payload) => {
  socket.emit('received', {queueId: 'driver', messageId: payload.messageId});
  setTimeout(() => {
    console.log('Driver: picked up', payload.messageId);
    socket.emit('In transit', payload);
    socket.emit('Package delivered', payload);
  }, 1000);

  setTimeout(() => {
    console.log('Driver: delivered', payload.messageId);
    socket.emit('delivered', payload); 
  }, 2000);
});

// socket.on('In transit', transitPackage);
// socket.on('Package delivered', deliverPackage);
