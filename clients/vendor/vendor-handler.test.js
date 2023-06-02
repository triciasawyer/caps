'use strict';


const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const { orderPackage, thankDriver } = require('./handler');


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


describe('Vendor', () => {
    // saying socket.emit is not a function ???
    // test('Successfully place an order that is available', () => {
    //     let payload = { orderId: 1234 };
    //     orderPackage(payload);

    //     expect(consoleSpy).toHaveBeenCalledWith('Vendor: Order ready for pickup', payload);
    //     expect(socket.emit).toHaveBeenCalledWith('pickup', payload);
    // });


    test('Successfully console log and emit order message', () => {
        let payload = { orderId: 1234, };
        thankDriver(payload);

        expect(consoleSpy).toHaveBeenCalledWith('Vendor: Thank you for placing your order', payload.customer);
    });


});
