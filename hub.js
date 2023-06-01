'use strict';


let eventEmitter = require('./eventEmitter');

// awareness of vendor and driver
require('./clients/vendor/index');
require('./clients/driver/index');


// listeners
eventEmitter.on('pickup', (payload) => logger('pickup', payload));
eventEmitter.on('in-transit', (payload) => logger('in-transit', payload));
eventEmitter.on('delivered', (payload) => logger('delivered', payload));


// logs the event (timestamp and payload)
function logger(event, payload){
  const timestamp = new Date();
  console.log('Event:', { event, timestamp, payload});
}