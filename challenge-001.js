/*
  1. Describe what this function is doing...
  2. What is wrong with that function ?
  3. How would you optimize it ?
*/

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

/*
 Answers:
  1. It's removing Array items based on excludes key/value list.
*/

// Answer: Fix the function
// O(excludes) => O(items) : O(n^2)
function excludeItems(items, excludes) {
  excludes.forEach(pair => {
    items = items.filter(item => !(item[pair.k] === pair.v));
  });
  return items;
}

// Answer: Optimizing it (if I can't change excludes data structure)
// Change order of execution: which is O(n^2)

// const excludesDict = {
//   color: ['silver'],
//   type: ['tv']
// };

function excludeItems(items, excludesDict) {
  return items.reduce((allItems, item) => {
    if (!excludes.some(exclude => item[exclude.k] === exclude.v)){
      allItems.push(item);
    }
    return allItems;
  }, []);
}

console.log(excludeItems(items, excludes));


