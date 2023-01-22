class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root = null;

function maxDepth(node) {
    if (!node) return 0;

    let lDepth = maxDepth(node.left);
    let rDepth = maxDepth(node.right);

    return Math.max(lDepth, rDepth) + 1;
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree is: ", maxDepth(root));
