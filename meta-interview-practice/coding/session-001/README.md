# AI-Native Coding — Session 001

## Delivery Inbox

You are joining a team that receives webhook deliveries from several external services. The repository contains a small in-memory inbox with an unfinished implementation.

### Stage 1

Implement the `DeliveryInbox` behavior in `src/deliveryInbox.js`:

- `record({ id, payload })` accepts a delivery when `id` is a non-empty string and returns `true`.
- If that `id` has already been recorded, return `false` and keep the original delivery unchanged.
- `get(id)` returns the recorded delivery, or `null` when no delivery exists for that id.
- A returned delivery has the shape `{ id, payload }`.

Use the existing tests as a starting point. You may inspect, modify, or add tests and use an AI coding assistant. Be ready to explain and verify any generated code.

Start by inspecting the codebase and talking through your understanding before changing code.
