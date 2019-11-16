/*
  Write a function that would simply take an array as an input
  and return a flattened array. For example given and
  array [1, [2, [3]]] should return [1, 2, 3].
*/

function flattenArray(element, accArr = []) {
  !Array.isArray(element) ?
    accArr.push(element) :
    element.forEach(i => flattenArray(i, accArr))

  return accArr;
}

flattenArray([1, [2, [3]], [5]])
