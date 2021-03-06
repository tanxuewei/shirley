/* -------------------------------------------- */
// ES5
function Node (key) {
  this.key = key
  this.left = null
  this.right = null
}

function BinaryTree () {
  this.root = null
  this.preOrderTraverseList = []
  this.inOrderTraverseList = []
  this.postOrderTraverseList = []
}

// 插入，判断根节点是否有值
BinaryTree.prototype.insert = function (key) {
  var newNode = new Node(key)

  if (this.root === null) {
    this.root = newNode
  } else {
    this.insertNode(this.root, newNode)
  }
}

// 放置左右节点的值
BinaryTree.prototype.insertNode = function (node, newNode) {
  if (newNode.key < node.key) {
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

// 先序
BinaryTree.prototype.preOrderTraverse = function () {
  this.preOrderTraverseList = []
  this.preOrderTraverseNode(this.root, )
}

BinaryTree.prototype.preOrderTraverseNode = function (node, ) {
  if (node !== null) {
    // (node.key)
    this.preOrderTraverseList.push(node.key)
    this.preOrderTraverseNode(node.left, )
    this.preOrderTraverseNode(node.right, )
  }
}

// 中序
BinaryTree.prototype.inOrderTraverse = function () {
  this.inOrderTraverseList = []
  this.inOrderTraverseNode(this.root)
}

BinaryTree.prototype.inOrderTraverseNode = function (node) {
  if (node !== null) {
    this.inOrderTraverseNode(node.left)
    this.inOrderTraverseList.push(node.key)
    this.inOrderTraverseNode(node.right)
  }
}

// 后序
BinaryTree.prototype.postOrderTraverse = function () {
  this.postOrderTraverseList = []
  this.postOrderTraverseNode(this.root)
}

BinaryTree.prototype.postOrderTraverseNode = function (node) {
  if (node !== null) {
    this.postOrderTraverseNode(node.left)
    this.postOrderTraverseNode(node.right)
    this.postOrderTraverseList.push(node.key)
  }
}

// 广度优先遍历
BinaryTree.prototype.bfs = function () {
  this.result = []
  this.remainNodes = [this.root];

  while (this.remainNodes.length > 0) {
    [...this.remainNodes].forEach(item => {
      this.remainNodes.shift()
      this.result.push(item.key)
      item.left && this.remainNodes.push(item.left)
      item.right && this.remainNodes.push(item.right)
    })
  }
}

var nodes = [8,3,10,1,6,14,4,7,13];
var binaryTree = new BinaryTree()
nodes.forEach(function (key) {
  binaryTree.insert(key)
})

binaryTree.preOrderTraverse()
binaryTree.inOrderTraverse()
binaryTree.postOrderTraverse()
binaryTree.bfs()
// console.log(binaryTree.preOrderTraverseList)
// console.log(binaryTree.inOrderTraverseList)
// console.log(binaryTree.postOrderTraverseList)

// console.log(binaryTree.result)

/* -------------------------------------------- */
const data = [
  {
    name: 'a',
    children: [
      {
        name: 'b',
        children: [
          {
            name: 'e'
          }
        ]
      },
      {
        name: 'c',
        children: [{ name: 'f' }]
      },
      {
        name: 'd',
        children: [{ name: 'g' }]
      },
    ],
  },
  {
    name: 'a2',
    children: [
        { name: 'b2', children: [{ name: 'e2' }] },
        { name: 'c2', children: [{ name: 'f2' }] },
        { name: 'd2', children: [{ name: 'g2' }] },
    ],
}
]

function getName (data) {
  let result = []
  data.forEach(item => {
    let map = (data) => {
      result.push(data.name)
      data.children && data.children.forEach(item1 => map(item1))
    }
    map(item)
  })

  return result.join(',')
}

function getName2(data) {
  let result = [];
  let queue = data;
  while (queue.length > 0) {
      [...queue].forEach(child => {
          queue.shift();
          result.push(child.name);
          child.children && (queue.push(...child.children));
      });
  }
  return result.join(',');
}

// console.log(getName(data))
// console.log(getName2(data))

/* -------------------------------------------- */

function TreeNode (val) {
  this.val = val
  this.left = null
  this.rignt = null
}

class BinaryTree2 {
  constructor (list) {
    this.root = null
    this.list = list || []
    this.renderTree()
  }

  renderTree () {
    this.list.forEach(val => {
      this.insert(val)
    })
  }

  insert (val) {
    let newNode = new TreeNode(val)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode (node, newNode) {
    // TODO 在想怎么搞呢
  }
}

var nodes = [8,3,10,1,6,14,4,7,13];
var binaryTree = new BinaryTree2(nodes)
console.log(binaryTree.root)

var root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]