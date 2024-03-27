class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = new Node(0);
let list = head;

for (let i = 1; i <= 10; i++) {
    head.next = new Node(i);
    head = head.next;
}

console.log(JSON.stringify(list));

function reverse(linked_list) {    
    let pointer = linked_list;
    
    let new_list = null;
    
    while (pointer != null) {
        if (new_list == null) {
            new_list = new Node(pointer.val);
        } else {
            let node_item = new Node(pointer.val);
            node_item.next = new_list;
            new_list = node_item;
        }
        
        pointer = pointer.next;
    }
    
    return new_list;
}

console.log(JSON.stringify(reverse(list)))