const rotateRight = (head, k) => {
    if (!head || !head.next || !k) return head;
    let cur = head;
    let len = 1;
    while (cur.next) {
        cur = cur.next;
        len++;
    }
    k = k % len;
    if (k === 0) return head;
    let breakPos = len - k;
    cur.next = head;
    cur = head;
    for (let i = 1; i < breakPos; i++) {
        cur = cur.next;
    }
    const newHead = cur.next;
    cur.next = null;
    return newHead;
};
