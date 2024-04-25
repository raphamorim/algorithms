class Node {
  constructor(val, random_pointer, next) {
    this.val = val;
    if (random_pointer != undefined) {
      this.random_pointer = random_pointer;
    }
    if (next != undefined) {
      this.next = next;
    }
  }
}

function deep_copy_list(list) {
  let cached = {};
  let head = list;
  let idx = 0;
  
  while (head) {
    cached[idx] = new Node(head.val, head.random_pointer);
    idx += 1;
    head = head.next;
  }

  for (var i =0; i < idx; i++) {
      let node = cached[i];
      let ptr = node.random_pointer;
      if (ptr != undefined) {
          node.random_pointer = cached[ptr];
      }
      if (i < idx) {
        node.next = cached[i + 1];
      } 
  }
  
  return cached[0];
}

let head = new Node(7, undefined, 
    new Node(13, 0, 
        new Node(11, 4,
            new Node(10, 2, 
                new Node(1, 0)
            )
        )
    )
);

console.log(deep_copy_list(head));
