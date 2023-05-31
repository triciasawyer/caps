'use strict';


const eventEmitter = require('../eventEmitter');
const { orderPackage, orderMessage } = require('./handler');


jest.mock('../eventEmitter', () => {
    return {
      on: jest.fn(),
      emit: jest.fn(),
    };
  });
  
  // update to spy
  console.log = jest.fn();


  describe('Vendor', () => {
    test('Successfully place an order that is available', () => {
      let payload = { orderId: 1234 };
      orderPackage(payload);
  
      expect(console.log).toHaveBeenCalledWith('Vendor order:', payload);
      expect(eventEmitter.emit).toHaveBeenCalledWith('Package available', payload);
    });


    'Order recieved', payload


});
