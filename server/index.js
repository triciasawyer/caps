'use strict';


require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton... called io or server
const io = new Server();

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
    socket.broadcast.emit('pickup', payload);
  });

  // not need
  socket.on('In transit', (payload) => {
    socket.broadcast.emit('In transit', payload);
  });

  socket.on('delivered', (payload) => {
    socket.broadcast.emit('delivered', payload);
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