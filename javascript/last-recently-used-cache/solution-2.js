// Not fully working version

class LRUCache {
  constructor(capacity) {
    this.cache = {};
    this.capacity = capacity;
    this.last_added_key = null;
    this.last_key = null;
  }

  /*
    { val, next, prev}
  */
  set(key, value) {
    if (Object.keys(this.cache).length >= this.capacity) {
      let last = this.cache[this.last_added_key].prev;
      this.cache[last].next = this.last_added_key;
      delete this.cache[last];
    }

    // In case it does exists
    if (this.cache[key]) {
      // If is the last one move to front
      if (this.cache[key].next == null) {
        let prev = this.cache[key].prev;
        this.cache[prev].next = null;
        this.cache[key].prev = null;
        this.cache[key].next = this.last_added_key;
        this.cache[this.last_added_key].prev = key;
      // Is not the last
      } else {
        let prev = this.cache[key].prev;
        let next = this.cache[key].next;

        this.cache[prev].next = this.cache[key].next;
        this.cache[next].prev = prev;

        this.cache[key].next = this.last_added_key;
        this.cache[this.last_added_key].prev = key;
      }

      this.last_added_key = key;
    } else{
      if (Object.keys(this.cache).length == 0) {
        this.cache[key] = {
          value: value,
          next: null,
          prev: key
        };
        this.last_added_key = key;
        this.last_key = key;
      } else {
        this.last_key = this.cache[this.last_added_key].prev;
        this.cache[this.last_added_key].prev = key;
        this.cache[key] = {
          value: value,
          next: this.last_added_key,
          prev: this.last_key
        }
        this.last_added_key = key;
      }

    }
  }

  list_cache() {
    return this.cache;
  }

  get(key) {
    if (this.cache[key]) {
      // If is the last one move to front
      if (this.cache[key].next == null) {
        let prev = this.cache[key].prev;
        this.cache[prev].next = null;
        this.cache[key].prev = key;
        this.cache[key].next = this.last_added_key;
        this.cache[this.last_added_key].prev = key;
      // Is not the last
      } else {
        let prev = this.cache[key].prev;
        let next = this.cache[key].next;

        this.cache[prev].next = this.cache[key].next;
        this.cache[next].prev = prev;

        this.cache[key].next = this.last_added_key;
        this.last_key = this.cache[this.last_added_key].prev;
        this.cache[this.last_added_key].prev = key;
      }

      this.last_added_key = key;

      return this.cache[key];
    }
  }
}

const test = require('../helpers/test');
let instance = new LRUCache(4);
instance.set(1, "Hugo");
instance.set(2, "Bob");
instance.set(3, "Jacob");
instance.set(4, "Jake");
instance.set(5, "Luke");
test(JSON.stringify(instance.list_cache()), JSON.stringify({
  '2': { value: 'Bob', next: 1, prev: 3 },
  '3': { value: 'Jacob', next: 2, prev: 4 },
  '4': { value: 'Jake', next: 3, prev: 5 },
  '5': { value: 'Luke', next: 4, prev: 1 }
}));
instance.get(3);
instance.set(6, "Hugo");
console.log(instance.list_cache());
// test(JSON.stringify(instance.list_cache()), JSON.stringify({
//   '2': { value: 'Bob', next: 1, prev: 4 },
//   '3': { value: 'Jacob', next: 5, prev: 6 },
//   '5': { value: 'Luke', next: 4, prev: 3 },
//   '6': { value: 'Hugo', next: 3, prev: 4 }
// }));
// test(instance.list_cache(), [2,5,4,3]);
// instance.set(6, "Mary");
// test(instance.list_cache(), [6,2,5,4]);
