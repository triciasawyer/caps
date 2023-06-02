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
  test('Successfully create an order payload', () => {

  });


  test('Message is sent after package is delivered', () => {
    packageDelivered(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`Vendor: Thank you for your order ${payload.customer}`);
  });


});