class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.cache_control = [];
  }

  set(key, value) {
    this.cache.set(key, value);
    this.update_cache(key);

    // Update cache will move over key to first
    if (this.cache_control[0] === key) {
      return;
    }

    if (this.cache_control.length === this.capacity) {
      let idx = this.cache_control.pop();
      this.cache.delete(idx);
    }
    this.cache_control.unshift(key);
  }

  get_cache_control() {
    return this.cache_control;
  }

  get(key) {
    // if hits cache miss then we don't care
    if (!this.cache.has(key)) {
      return null
    }

    this.update_cache(key);
    return this.cache.get(key);
  }

  update_cache(key) {
    let should_swipe = false;
    for (let i = this.cache_control.length - 1; i > 0; i--) {
      if (this.cache_control[i] === key) {
        should_swipe = true;
      }

      if (should_swipe) {
        let current = this.cache_control[i];
        let next = this.cache_control[i - 1];
        this.cache_control[i] = next;
        this.cache_control[i - 1] = current;
      }
    }
  }
}

const test = require('../helpers/test');
let instance = new LRUCache(4);
instance.set(1, "Hugo");
instance.set(2, "Bob");
instance.set(3, "Jacob");
console.log(instance.get_cache_control());
instance.set(4, "Jake");
instance.set(5, "Luke");
console.log(instance.get_cache_control());
test(instance.get_cache_control(), [5,4,3,2]);
instance.get(2);
test(instance.get_cache_control(), [2,5,4,3]);
instance.set(6, "Mary");
test(instance.get_cache_control(), [6,2,5,4]);
