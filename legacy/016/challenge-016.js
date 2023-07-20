/*

Write an Emitter:

emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above

*/

class Emitter {
  constructor() {
    this.events = Object.create(null);
  }

  subscribe(eventName, handler) {
    if (eventName in this.events) {
      this.events[eventName].add(handler);
    } else {
      this.events[eventName] = new Set([handler]);
    }

    function release() {
      this.events[eventName].delete(handler);
    }

    return { release: release.bind(this) };
  }

  emit() {
    const params = Array.from(arguments);
    const eventName = params[0];
    if (this.events[eventName]) {
      params.shift();
      this.events[eventName].forEach(handler => {
        try {
          handler.apply(undefined, params)
        } catch(e) {
          console.error(e);
        }
      });
    }
  }
}
