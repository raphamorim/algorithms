1. Describe what this function is doing...
2. What is wrong with that function ?
3. How would you optimize it ?

```javascript
// could be potentially more than 3 keys in the object below
var items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'macbook', age: 10},
]

var excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'}
]

function excludeItems(items, excludes) {
  excludes.forEach(pair => {
    items = items.filter(item => item[pair.k] === item[pair.v]);
  });
  return items;
}
```