# AI-Native Coding — Session 002

## Event Bus

You are joining a team whose JavaScript services need to notify multiple components when an event occurs. The repository contains an unfinished in-memory event bus.

### Stage 1

Implement the `EventBus` behavior in `src/eventBus.js`:

- `subscribe(topic, handler)` registers a handler for a topic.
- Multiple handlers may subscribe to the same topic.
- `publish(topic, payload)` calls that topic's handlers in subscription order, passing each handler the payload.
- Publishing to a topic with no subscribers does nothing.

Use the existing tests as a starting point. You may inspect, modify, or add tests and use an AI coding assistant. Be ready to explain and verify any generated code.

Start by inspecting the codebase and talking through your understanding before changing code.
