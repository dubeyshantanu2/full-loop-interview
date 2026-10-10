const test = require('node:test');
const assert = require('node:assert/strict');
const { DeliveryInbox } = require('../src/deliveryInbox');

test('records a delivery and retrieves it by id', () => {
  const inbox = new DeliveryInbox();
  const delivery = { id: 'evt-1', payload: { status: 'ready' } };

  assert.equal(inbox.record(delivery), true);
  assert.deepEqual(inbox.get('evt-1'), delivery);
});

test('does not replace the first delivery when an id is repeated', () => {
  const inbox = new DeliveryInbox();
  const first = { id: 'evt-1', payload: { version: 1 } };

  assert.equal(inbox.record(first), true);
  assert.equal(inbox.record({ id: 'evt-1', payload: { version: 2 } }), false);
  assert.deepEqual(inbox.get('evt-1'), first);
});

test('returns null for an unknown id', () => {
  const inbox = new DeliveryInbox();

  assert.equal(inbox.get('missing'), null);
});

test('rejects empty and non-string ids without recording them', () => {
  const inbox = new DeliveryInbox();

  assert.equal(inbox.record({ id: '', payload: {} }), false);
  assert.equal(inbox.record({ id: 42, payload: {} }), false);
  assert.equal(inbox.get(''), null);
  assert.equal(inbox.get(42), null);
});
