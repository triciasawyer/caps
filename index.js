'use strict';


require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./server/lib/queue');

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


  // // joining a room
  socket.on('Join', (room) => {
    console.log(socket.id, ' joined ', room);
    socket.join(room);
  });


  // listens for and relays pickup event
  socket.on('pickup', (payload) => {
    let driverQueue = capsQueue.read('driver');
    if (!driverQueue) {
      let driverKey = capsQueue.store('driver', new Queue());
      driverQueue = capsQueue.read(driverKey);
    }
    driverQueue.store(payload.messageId, payload);
    socket.broadcast.emit('pickup', payload);
  });


  socket.on('In transit', (payload) => {
    socket.broadcast.emit('In transit', payload);
  });


  socket.on('delivered', (payload) => {
    payload.event = 'delivered';
    let vendorQueue = capsQueue.read(payload.queueId);
    if (!vendorQueue) {
      let vendorKey = capsQueue.store(payload.queueId, new Queue());
      vendorQueue = capsQueue.read(vendorKey);
    }
    vendorQueue.store(payload.messageId, payload);
    // console.log('TTTTT', payload.queueId);
    socket.to(payload.queueId).emit('delivered', payload);
  });


  socket.on('getAll', (payload) => {
    console.log('attempt to get all orders');
    let currentQueue = capsQueue.read(payload.queueId);
    // console.log('XXXX', currentQueue);
    if (currentQueue && currentQueue.data){
      const ids = Object.keys(currentQueue.data);
      ids.forEach(messageId => {
        let order = currentQueue.read(messageId);
        console.log('XXXX', payload.queueId);
        socket.emit(order.event, order);
      });
    }
  });


  socket.on('received', (payload) => {
    let currentQueue = capsQueue.read(payload.queueId);
    if(!currentQueue){
      throw new Error('We have the payload, but no queue');
    }
    currentQueue.remove(payload.messageId);
  });
  

});


console.log('Listening on PORT:', PORT);
//listening for all events at port
io.listen(PORT);