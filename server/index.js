'use strict';


require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const socket =  io('http://localhost:3001/caps');

// socket server singleton // sometimes called io
const io = new Server();

// create namespace
const caps = io.of('/caps');


io.on('connection', (socket) => {
  console.log('Connected to server', socket.id);
});


caps.on('connection', (socket) => {
  console.log('Connected to caps', socket.id);
});

// joining a room
socket.on('JOIN', (room) => {
  console.log(socket.id, ' joined ', room);
  socket.join(room);
});
  

socket.on('pickup', (payload) => {
  socket.broadcast.emit('pickup', payload);
});


socket.on('Package available', (payload) => {
  socket.broadcast.emit('Package available', payload);
});


socket.on('Package pickedup', (payload) => {
  socket.emit('Deliver package', payload);
});


socket.on('Package Delivered', (payload) => {
  socket.broadcast.emit('Package Delivered', payload);
});






//listening for all events at port
io.listen(PORT);