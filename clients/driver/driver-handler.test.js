'use strict';


// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3002/caps');
// const { pickupPackage, deliverPackage } = require('./handler');


jest.mock('socket.io-client', () => {
  const emit = jest.fn();
  return {
    io: jest.fn().mockReturnValue({
      emit,
    }),
  };
});

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
  consoleSpy.mockRestore();
});


describe('Driver', () => {
  test('Successfully receives a package to deliver', () => {
    // let payload = { orderId: 1234 };
    // pickupPackage(payload);

    // expect(socket.emit).toHaveBeenCalledWith('In transit', payload);
    // expect(consoleSpy).toHaveBeenCalledWith('Driver: picked up', payload.orderId);
  });


  test('Successfully delivers the package', () => {
    // let payload = { orderId: 1234 };
    // deliverPackage(payload);

    // expect(socket.emit).toHaveBeenCalledWith('delivered', payload);
    // expect(consoleSpy).toHaveBeenCalledWith('Driver: delivered', payload.orderId);
  });


});