# Last-recently used cache (LRU)

Least Recently Used (LRU) is a common caching strategy. It defines the policy to evict elements from the cache to make room for new elements when the cache is full, meaning it discards the least recently used items first.

Let’s take an example of a cache that has a capacity of 4 elements. We cache elements 1, 2, 3 and 4.

```
[1,2,3,4]
```

The example above represents the cache state after first access of all four elements. We now need to cache another element “5”.

```
[2,3,4,5]
```

In LRU cache, we evict the least recently used element (in this case “1”) in case a new element needs to be cached. Now “2” is next in line to be evicted if a new element needs to be cached. Let’s see what happens when “2” is accessed again.

```
[3,4,5,2]
```

Now “3” becomes the next in line to be evicted from the cache.