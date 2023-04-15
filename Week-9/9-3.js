class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let root = null;

function printLevelOrder() {
    let h = height(root);
    for (let i = 1; i <= h; i++) {
        printCurrentLevel(root, i);
    }
}

function height(node) {
    if (!node) return 0;

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function printCurrentLevel(node, level) {
    if (!node) return;

    if (level === 1) {
        console.log(node.data);
    } else if (level > 1) {
        printCurrentLevel(node.left, level - 1);
        printCurrentLevel(node.right, level - 1);
    }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right =
