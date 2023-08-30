const Queue = require('./queue');

describe('Queue functionality', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should store and retrieve items', () => {
    const key = queue.store('itemKey', 'itemValue');
    const retrievedValue = queue.read(key);

    expect(retrievedValue).toBe('itemValue');
  });

  test('should remove items', () => {
    const key = queue.store('itemKey', 'itemValue');
    const removedValue = queue.remove(key);

    expect(removedValue).toBe('itemValue');
    expect(queue.read(key)).toBeUndefined();
  });

  it('should return undefined for non-existent key', () => {
    expect(queue.read('nonExistentKey')).toBeUndefined();
    expect(queue.remove('nonExistentKey')).toBeUndefined();
  });
});
