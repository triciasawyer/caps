'use-strict';


const { io } =  require('socket.io-client');
const socket =  io('http://localhost:3002/caps');
const { pickupPackage, transitPackage, deliverPackage } = require('./handler');

// to get all stored messages for the drive
// socket.emit('getAll', { queueId: 'Driver' });

socket.on('pickup', pickupPackage);
socket.on('In transit', transitPackage);
socket.on('Package delivered', deliverPackage);
