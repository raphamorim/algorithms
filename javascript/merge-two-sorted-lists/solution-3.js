class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function merge(la, lb) {
    let new_list = new Node(0);
    
    let head = new_list;
    
    while (la || lb) {
        if (!la && lb) {
            new_list.next = new Node(lb.val);
            lb = lb.next;
            new_list = new_list.next;
            continue;
        }
        
        if (!lb && la) {
            new_list.next = new Node(la.val);
            la = la.next;
            new_list = new_list.next;
            continue;
        }
        
        if (la.val <= lb.val) {
            new_list.next = new Node(la.val);
            la = la.next;
        } else {
            new_list.next = new Node(lb.val);
            lb = lb.next;
        }

        new_list = new_list.next;
    }
    
    return head.next;
}

let list_a = new Node(1);
list_a.next = new Node(2);
list_a.next.next = new Node(3);

let list_b = new Node(1);
list_b.next = new Node(3);
list_b.next.next = new Node(4);
list_b.next.next.next = new Node(5);

console.log(JSON.stringify(list_a));
console.log(JSON.stringify(list_b));
console.log(JSON.stringify(merge(list_a, list_b)));