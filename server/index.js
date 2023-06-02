'use strict';


require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');

// socket server singleton... called io or server
const io = new Server();
const capsQueue = new Queue();

// create namespace
const caps = io.of('/caps');


caps.on('connection', (socket) => {
  console.log('Connected to caps namespace', socket.id);

  // any event emitted is logged
  socket.onAny((event, payload) => {
    let timestamp = new Date();
    console.log('Event: ', { event, timestamp, payload });
  });

  // listens for and relays pickup event
  socket.on('pickup', (payload) => {
    let driverQueue = capsQueue.read('driver');
    if (!driverQueue) {
      let driverKey = capsQueue.store('driver', new Queue());
      driverQueue = capsQueue.read(driverKey);
    }
    // driverQueue.store();
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('In transit', (payload) => {
    socket.broadcast.emit('In transit', payload);
  });

  socket.on('delivered', (payload) => {
    socket.broadcast.emit('delivered', payload);
  });


  socket.on('getAll', (payload) => {
    console.log('attempt to get all orders');
    let currentQueue = capsQueue.read(payload.queueId);
    if (currentQueue && currentQueue.data){
      const ids = Object.keys(currentQueue.data);
      // check this because I don't want to refactor my payload like in lecture
      ids.forEach(messageId => {
        let savedPayload = currentQueue.read(messageId);
    
        socket.emit(savedPayload.event, savedPayload);
      });
    }
  });


  socket.on('received', (payload) => {
    let currentQueue = capsQueue.read(payload.queueId);
    if(currentQueue){
      throw new Error('we have the payload, but no queue');
    }
    currentQueue.remove(payload.messageId);
  });
  

});


// // joining a room
// socket.on('JOIN', (room) => {
//   console.log(socket.id, ' joined ', room);
//   socket.join(room);
// });


console.log('Listening on PORT:', PORT);
//listening for all events at port
io.listen(PORT);