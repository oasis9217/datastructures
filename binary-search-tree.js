class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        const newNode = new Node(data)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (node.data > newNode.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, data) {
        if (node === null) {
            return null
        } else if(node.data > data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else if (node.data < data) {
            node.right = this.removeNode(node.right, data)
            return node
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return node
            } else if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            } else {
                const minimum = this.findMinimumNode(node.right)
                node.data = minimum.data
                node.right = this.removeNode(node.right, minimum.data)
                return node
            }
        }
    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }
    findMinimumNode(node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMinimumNode(node.left)
        }
    }
    getRootNode() {
        return this.root;
    }
    search(node, data) {
        if (node === null) {
            return null
        } else if (node.data < data) {
            return this.search(node.right, data)
        } else if (node.data > data) {
            return this.search(node.left, data)
        } else {
            return node
        }
    }
}
