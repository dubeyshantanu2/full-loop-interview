const test = require('node:test');
const assert = require('node:assert/strict');
const { EventBus } = require('../src/eventBus');

test('publishes a payload to a subscribed handler', () => {
  const bus = new EventBus();
  const received = [];

  bus.subscribe('order.created', payload => received.push(payload));
  bus.publish('order.created', { id: 'order-1' });

  assert.deepEqual(received, [{ id: 'order-1' }]);
});

test('publishes to multiple handlers in subscription order', () => {
  const bus = new EventBus();
  const calls = [];

  bus.subscribe('order.created', () => calls.push('first'));
  bus.subscribe('order.created', () => calls.push('second'));
  bus.publish('order.created', {});

  assert.deepEqual(calls, ['first', 'second']);
});

test('does nothing when a topic has no subscribers', () => {
  const bus = new EventBus();

  assert.doesNotThrow(() => bus.publish('order.created', {}));
});

test('isolates handlers between different topics', () => {
  const bus = new EventBus();
  const orderCalls = [];
  const userCalls = [];

  bus.subscribe('order.created', payload => orderCalls.push(payload));
  bus.subscribe('user.created', payload => userCalls.push(payload));

  bus.publish('order.created', { id: 'order-1' });

  assert.deepEqual(orderCalls, [{ id: 'order-1' }]);
  assert.deepEqual(userCalls, []);
});

test('forwards falsy and primitive payloads accurately', () => {
  const bus = new EventBus();
  const received = [];

  bus.subscribe('value.changed', val => received.push(val));

  const testPayloads = [0, false, '', null, undefined];
  for (const payload of testPayloads) {
    bus.publish('value.changed', payload);
  }

  assert.deepEqual(received, [0, false, '', null, undefined]);
});

test('invokes duplicate subscribed handler references multiple times in order', () => {
  const bus = new EventBus();
  let count = 0;
  const handler = () => { count += 1; };

  bus.subscribe('ping', handler);
  bus.subscribe('ping', handler);
  bus.publish('ping', {});

  assert.equal(count, 2);
});

test('supports nested publishing across topics from within a handler', () => {
  const bus = new EventBus();
  const executionOrder = [];

  bus.subscribe('parent', () => {
    executionOrder.push('parent-start');
    bus.publish('child', 'payload-child');
    executionOrder.push('parent-end');
  });

  bus.subscribe('child', payload => {
    executionOrder.push(`child:${payload}`);
  });

  bus.publish('parent', 'payload-parent');

  assert.deepEqual(executionOrder, [
    'parent-start',
    'child:payload-child',
    'parent-end',
  ]);
});

test('does not invoke a handler subscribed during the current dispatch until subsequent publish', () => {
  const bus = new EventBus();
  const calls = [];

  bus.subscribe('event', () => {
    calls.push('handler-1');
    bus.subscribe('event', () => calls.push('handler-dynamically-added'));
  });

  bus.publish('event', {});
  assert.deepEqual(calls, ['handler-1']);

  calls.length = 0;
  bus.publish('event', {});
  assert.deepEqual(calls, ['handler-1', 'handler-dynamically-added']);
});

test('propagates errors thrown by handlers', () => {
  const bus = new EventBus();

  bus.subscribe('err.topic', () => {
    throw new Error('Handler failure');
  });

  assert.throws(
    () => bus.publish('err.topic', {}),
    { message: 'Handler failure' }
  );
});


