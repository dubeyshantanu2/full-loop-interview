class DeliveryInbox {
  constructor() {
    this.deliveries = new Map();
  }

  record(delivery) {
    const { id, payload } = delivery;

    if (typeof id !== 'string' || id.length === 0 || this.deliveries.has(id)) {
      return false;
    }

    this.deliveries.set(id, { id, payload });
    return true;
  }

  get(id) {
    return this.deliveries.get(id) ?? null;
  }
}

module.exports = { DeliveryInbox };
