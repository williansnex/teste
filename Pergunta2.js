class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value, []);
    }

    searchNode(node, value, path) {
        if (node === null) {
            return null;
        }

        path.push(node.value);

        if (value === node.value) {
            return path.join(" -> ");
        } else if (value < node.value) {
            return this.searchNode(node.left, value, path);
        } else {
            return this.searchNode(node.right, value, path);
        }
    }
}

const tree = new BinaryTree();
tree.insert("Maçã");
tree.insert("Morango");
tree.insert("Goiaba");
tree.insert("Banana");
tree.insert("Pera");


const palavra_chave = "Pera";
const caminho = tree.search(palavra_chave);

if (caminho) {
    console.log(caminho);
} else {
    console.log(`A palavra ${palavra_chave} não foi encontrada.`);
}
