'use strict';

const { createdOrder, packageDelivered } = require('./handler');


let consoleSpy;

let socket = { emit: jest.fn() };

beforeAll(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterAll(() => {
  consoleSpy.mockRestore();
});


describe('Flower vendor', () => {  
  test('Successfully create an order payload', () => {
    createdOrder(socket);

    // expect(consoleSpy).toHaveBeenCalledWith(`Vendor: Order #: ${payload.messageId} ready for pickup.`);
    expect(socket.emit).toHaveBeenCalledWith('pickup', expect.objectContaining({event: 'pickup', messageId: expect.any(String)}));
  });


  test('Message is sent after package is delivered', () => {
    let payload = { order: { customer: 1234 }};
    packageDelivered(payload);

    expect(consoleSpy).toHaveBeenCalledWith(`Vendor: Thank you for placing your order ${payload.order.customer}`);
  });


});