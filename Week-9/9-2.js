class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isBST(node) {
    if (!node) return true;

    if (node.left && node.left.data > node.data) return false;
    if (node.right && node.right.data < node.data) return false;

    return isBST(node.left) && isBST(node.right);
}

let root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

if (isBST(root)) {
    console.log("Is BST");
} else {
    console.log("Not a BST");
}
