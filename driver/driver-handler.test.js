'use strict';

const eventEmitter = require('../eventEmitter');
const { pickupPackage, deliverPackage } = require('./handler');


jest.mock('../eventEmitter', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
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
  test('Successfully log and emit in-transit after package is picked up', () => {
    let payload = { orderId: 1234 };
    pickupPackage(payload);

    // expect(eventEmitter.emit).toHaveBeenCalledWith('In transit', payload);
    expect(consoleSpy).toHaveBeenCalledWith('Driver: picked up', payload.orderId);
  });


  test('Successfully log and emit in-transit after package is delivered', () => {
    let payload = { orderId: 1234 };
    deliverPackage(payload);

    expect(eventEmitter.emit).toHaveBeenCalledWith('delivered', payload);
    expect(consoleSpy).toHaveBeenCalledWith('Driver: delivered', payload.orderId);
  });


});