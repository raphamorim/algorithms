class ListNode {
    constructor(val) {
        this.val = val;
    }
}

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};

var list_node_a = new ListNode(1);
list_node_a.next = new ListNode(2);
list_node_a.next.next = new ListNode(4);

var list_node_b = new ListNode(1);
list_node_b.next = new ListNode(3);
list_node_b.next.next = new ListNode(4);

console.log(JSON.stringify(mergeTwoLists(list_node_a, list_node_b)));
