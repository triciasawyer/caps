'use strict';


require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton // sometimes called io
const server = new Server();

// create namespace
const caps = server.of('/caps');






//listening for all events at port
server.listen(PORT);