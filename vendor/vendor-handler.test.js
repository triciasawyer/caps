'use strict';


const eventEmitter = require('../eventEmitter');
const { orderPackage, thankDriver } = require('./handler');


jest.mock('../eventEmitter', () => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
    };
});

let consoleSpy;
beforeEach(() => {
    // Attach to the console (take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
    // Put the console back
    consoleSpy.mockRestore();
});


describe('Vendor', (payload) => {
    test('Successfully place an order that is available', () => {
        let payload = { orderId: 1234 };
        orderPackage(payload);

        expect(consoleSpy).toHaveBeenCalledWith('Vendor order:', payload);
        expect(eventEmitter.emit).toHaveBeenCalledWith('Package available', payload);
    });


    'Order recieved', payload


});
