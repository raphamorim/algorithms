/* Given an input array and another array that describes a new index for each element, mutate the input array so that each element ends up in their new index. Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops. Run time of this solution is THETA(n) as indexOf is a constant-time operation since an array in… */

var input = ['A', 'B', 'C', 'D', 'E'],
  spec = [0,2,1,4,3];

// Should mutate input to ['A', 'C', 'B', 'E', 'D']

function mutate(input, spec) {
  spec.forEach((val, i) => {
    let newIndex = spec.indexOf(i);
    let temp1 = spec[i];
    let temp2 = input[i];

    spec[i] = spec[newIndex];
    input[i] = input[newIndex];
    spec[newIndex] = temp1;
    input[newIndex] = temp2;
  });
}

mutate(input, spec);

console.log(input, spec);
