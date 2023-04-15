var reverseList = function(head) {
    // handle special case
    if (head == null || head.next == null) return head;
    // Create a new node to call the function recursively and we get the reverse linked list...
    var res = reverseList(head.next);
    // Set head node as head.next.next...
    head.next.next = head;
    //set head's next to be null...
    head.next = null;
    return res;     // Return the reverse linked list...
};