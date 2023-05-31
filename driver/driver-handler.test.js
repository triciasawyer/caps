'use strict';

const eventEmitter = require('../eventEmitter');
const { pickupPackage, deliverPackage } = require('./handler');


jest.mock('../eventEmitter', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

// update to spy
console.log = jest.fn();


describe('Driver', () => {
  test('Successfully log and emit in-transit after package is picked up', () => {
    let payload = { orderId: 1234 };
    pickupPackage(payload);

    expect(console.log).toHaveBeenCalledWith('DRIVER: picked up', payload.orderId);
    // expect(eventEmitter.emit).toHaveBeenCalledWith('Package pickedup', payload);
    // expect(eventEmitter.emit).toHaveBeenCalledWith('Pickup: in-transit', payload);
  });


  test('Successfully log and emit in-transit after package is delivered', () => {
    let payload = { orderId: 1234 };
    deliverPackage(payload);

    expect(console.log).toHaveBeenCalledWith('Driver: delivered', payload.orderId);
    expect(eventEmitter.emit).toHaveBeenCalledWith('Package delivered', payload);
  });


});