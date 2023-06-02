'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const { createdOrder, packageDelivered } = require('./handler');

jest.mock('../socket.js', () => {
  const emitMock = jest.fn();

  return {
    io: {
      connect: jest.fn().mockReturnValue({
        emit: emitMock,
      }),
    },
  };
});

let consoleSpy;


beforeAll(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterAll(() => {
  consoleSpy.mockRestore();
});


describe('Flower vendor', () => {  
  test('Successfully create an order payload', () => {
    let payload = { orderId: 1234 };
    createdOrder(socket, payload);

    expect(consoleSpy).toHaveBeenCalledWith(`Vendor: Order #: ${payload.orderId} ready for pickup.`);
    // test can't access socket.emit, saying it is not a function... get help with this!!!!
    // expect(socket.emit).toHaveBeenCalledWith('pickup', payload);
  });


  test('Message is sent after package is delivered', () => {
    let payload = { orderId: 1234 };
    packageDelivered(payload);

    expect(consoleSpy).toHaveBeenCalledWith(`Vendor: Thank you for placing your order ${payload.customer}`);
  });


});