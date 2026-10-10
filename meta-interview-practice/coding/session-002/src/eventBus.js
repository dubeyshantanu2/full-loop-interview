class EventBus {
  constructor() {
    this.handlers = new Map();
  }

  /**
   * Subscribes an event handler to a specified topic.
   * Maintains registration order for dispatch.
   *
   * @param {string} topic - Topic identifier.
   * @param {Function} handler - Callback to execute when event is published.
   */
  subscribe(topic, handler) {
    if (!this.handlers.has(topic)) {
      this.handlers.set(topic, []);
    }
    this.handlers.get(topic).push(handler);
  }

  /**
   * Publishes an event payload to all handlers registered under the topic.
   * Invokes handlers sequentially in subscription order.
   * No-op if topic has no registered subscribers.
   *
   * @param {string} topic - Topic identifier.
   * @param {*} payload - Data payload delivered to handlers.
   */
  publish(topic, payload) {
    const topicHandlers = this.handlers.get(topic);
    if (!topicHandlers || topicHandlers.length === 0) {
      return;
    }

    // Snapshot subscribers to isolate iteration from modifications during dispatch.
    const subscribersSnapshot = [...topicHandlers];
    for (const handler of subscribersSnapshot) {
      handler(payload);
    }
  }
}

module.exports = { EventBus };
