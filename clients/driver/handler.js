'use strict';


const { io } =  require('socket.io-client');
const socket =  io('http://localhost:3001/caps');


const pickupPackage = (payload) => {
  console.log('Driver: picked up', payload.orderId);
  socket.emit('In transit', payload);
};


const transitPackage = (payload) => {
  setTimeout(() => {
    socket.emit('Package delivered', payload);
  }, 3000);
};


const deliverPackage = (payload) => {
  console.log('Driver: delivered', payload.orderId);
  socket.emit('delivered', payload);  
};


module.exports = { pickupPackage, transitPackage, deliverPackage };