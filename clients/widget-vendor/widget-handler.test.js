'use strict';

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


describe('Widget vendor', () => {

  let socket;
  let payload;
  beforeEach(() => {
    socket = require('../socket.js').io.connect(); // Use the mock socket object
    payload = {
      store: 'tester',
      orderID: 1234,
      customer: 'customer',
      address: 'address',
    };
  });

    
  test('Successfully create an order payload', () => {
    createdOrder(socket, payload);

    expect(consoleSpy).toHaveBeenCalledWith(`Vendor: Order #:${payload.orderID} ready for pickup.`);
    expect(socket.emit).toHaveBeenCalledWith('pickup', payload);
  });


  test('Message is sent after package is delivered', () => {
    packageDelivered(payload);

    expect(consoleSpy).toHaveBeenCalledWith(`Vendor: Thank you for placing your order ${payload.customer}`);
  });


});