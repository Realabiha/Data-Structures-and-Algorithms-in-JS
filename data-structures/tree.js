// binary tree
// add find remove findMin findMax isPresent
// findMinHeight findMaxHeight isBalance
// preOrder inOrder postOrser
// levelOrder


class Node{
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    add(val){
        // let target = this.root;
        // if(!target){ 
        //     this.root = new Node(val); 
        //     return this;
        // };
        // const addNode = function(node, val){
        //     if(node.value < val && node.right){
        //         addNode(node.right, val)
        //     }
        //     if(node.value > val && node.left){
        //         addNode(node.left, val);
        //     }
        //     node.value > val && !node.left ? node.left = new Node(val) : '';
        //     node.value < val && !node.right ? node.right = new Node(val) : ''; 
        // }
        // addNode(target, val);

        let node = this.root;
        if(node){
            const addNode = function(node, val){
                if(node.value === val){
                    return null;
                }else if(node.value < val){
                    if(node.right){
                        return addNode(node.right, val);
                    }else{
                        node.right = new Node(val);
                    }
                }else{
                    if(node.left){
                        return addNode(node.left, val);
                    }else{
                        node.left = new Node(val);
                    }
                }
            }
            addNode(node, val);
        }else{
            this.root = new Node(val);
        }
        return this;
    }
    find(val){
        // let target = this.root;
        // if(!target) return null;
        // const findNode = function(node, val){
        //     if(!node || node.value === val) return node;
            
        //     if(node.value > val){
        //         return findNode(node.left, val);
        //     }
        //     if(node.value < val){
        //         return  findNode(node.right, val);
        //     }
        // }
        // return findNode(target, val);

        let node = this.root;
        while(node){
            if(node.value === val){
                return node;
            }else if(node.value < val){
                node = node.left;
            }else{
                node = node.right;
            }
        }
        return null;
    }
    findMin(){
        let node = this.root;
        while(node.left){
            node = node.left
        }
        return node.value;
    }
    findMax(){
        let node = this.root;
        while(node.right){
            node = node.right
        }
        return node.value;
    }
    remove(val){
        const removeNode = function(node, val){
            if(node == null) return null;
            // 1. 找到目标节点
            // 2. 找到替换节点
            // 3. 交换并重新排序

            if(node.value === val){
                // 没有节点
                if(!node.left && !node.right){
                    return null;
                }
                // 右节点
                if(!node.left){
                    return node.right;
                }
                // 左节点
                if(!node.right){
                    return node.left;
                }
                // 右节点左
                // let tempNode = node.right;
                // while(tempNode.left){
                //     tempNode = tempNode.left;
                // }
                // node.value = tempNode.value;
                // console.log(tempNode, 'temp');
                // //重新排序right children
                // node.right = removeNode(node.right, tempNode.value);
                // return node;

                // 左节点右
                let tempNode = node.left;
                while(tempNode.right){
                    tempNode = tempNode.right;
                }
                console.log(node.left, 'temp');
                node.value = tempNode.value;
                // 重新排序left children
                node.left = removeNode(node.left, tempNode.value);
                return node;
            }else if(node.value > val){
                node.left = removeNode(node.left, val);
                return node;
            }else{  
                node.right = removeNode(node.right, val);
                return node;
            }
            
        }
        this.root = removeNode(this.root, val)
    }
}

let tree = new Tree();
tree.add(30)
.add(15)
.add(40)
.add(35)
.add(100)
.add(38)
.add(37)
.remove(40)
console.dir(tree.root)
console.dir(tree.root.right.left);




/* Binary Search Tree */

// class Node {
//     constructor(data, left = null, right = null) {
//       this.data = data;
//       this.left = left;
//       this.right = right;
//     }
//   }
  
//   class BST {
//     constructor() {
//       this.root = null;
//     }
//     add(data) {
//       const node = this.root;
//       if (node === null) {
//         this.root = new Node(data);
//         return;
//       } else {
//         const searchTree = function(node) {
//           if (data < node.data) {
//             if (node.left === null) {
//               node.left = new Node(data);
//               return;
//             } else if (node.left !== null) {
//               return searchTree(node.left);
//             }
//           } else if (data > node.data) {
//             if (node.right === null) {
//               node.right = new Node(data);
//               return;
//             } else if (node.right !== null) {
//               return searchTree(node.right);
//             }
//           } else {
//             return null;
//           }
//         };
//         return searchTree(node);
//       }
//     }
//     findMin() {
//       let current = this.root;
//       while (current.left !== null) {
//         current = current.left;
//       }
//       return current.data;
//     }
//     findMax() {
//       let current = this.root;
//       while (current.right !== null) {
//         current = current.right;
//       }
//       return current.data;
//     }
//     find(data) {
//       let current = this.root;
//       while (current.data !== data) {
//         if (data < current.data) {
//           current = current.left;
//         } else {
//           current = current.right;
//         }
//         if (current === null) {
//           return null;
//         }
//       }
//       return current;
//     }
//     isPresent(data) {
//       let current = this.root;
//       while (current) {
//         if (data === current.data) {
//           return true;
//         }
//         if (data < current.data) {
//           current = current.left;
//         } else {
//           current = current.right;
//         }
//       }
//       return false;
//     }
//     remove(data) {
//       const removeNode = function(node, data) {
//         if (node == null) {
//           return null;
//         }
//         if (data == node.data) {
//           // node has no children 
//           if (node.left == null && node.right == null) {
//             return null;
//           }
//           // node has no left child 
//           if (node.left == null) {
//             return node.right;
//           }
//           // node has no right child 
//           if (node.right == null) {
//             return node.left;
//           }
//           // node has two children 
//           var tempNode = node.right;
//           while (tempNode.left !== null) {
//             tempNode = tempNode.left;
//           }
//           node.data = tempNode.data;
//           node.right = removeNode(node.right, tempNode.data);
//           return node;
//         } else if (data < node.data) {
//           node.left = removeNode(node.left, data);
//           return node;
//         } else {
//           node.right = removeNode(node.right, data);
//           return node;
//         }
//       }
//       this.root = removeNode(this.root, data);
//     }
//     isBalanced() {
//       return (this.findMinHeight() >= this.findMaxHeight() - 1)
//     }
//     findMinHeight(node = this.root) {
//         if (node == null) {
//             return -1;
//         };
//         let left = this.findMinHeight(node.left);
//         let right = this.findMinHeight(node.right);
//         if (left < right) {
//             return left + 1;
//         } else {
//             return right + 1;
//         };
//     }
//     findMaxHeight(node = this.root) {
//         if (node == null) {
//             return -1;
//         };
//         let left = this.findMaxHeight(node.left);
//         let right = this.findMaxHeight(node.right);
//         if (left > right) {
//             return left + 1;
//         } else {
//             return right + 1;
//         };
//     }
//     inOrder() {
//       if (this.root == null) {
//         return null;
//       } else {
//         var result = new Array();
//         function traverseInOrder(node) {       
//           node.left && traverseInOrder(node.left);
//           result.push(node.data);
//           node.right && traverseInOrder(node.right);
//         }
//         traverseInOrder(this.root);
//         return result;
//       };
//     }
//     preOrder() {
//       if (this.root == null) {
//         return null;
//       } else {
//         var result = new Array();
//         function traversePreOrder(node) {
//           result.push(node.data);
//           node.left && traversePreOrder(node.left);
//           node.right && traversePreOrder(node.right);
//         };
//         traversePreOrder(this.root);
//         return result;
//       };
//     }
//     postOrder() {
//       if (this.root == null) {
//         return null;
//       } else {
//         var result = new Array();
//         function traversePostOrder(node) {
//           node.left && traversePostOrder(node.left);
//           node.right && traversePostOrder(node.right);
//           result.push(node.data);
//         };
//         traversePostOrder(this.root);
//         return result;
//       }
//     }
    
//     levelOrder() {
//         let result = [];
//         let Q = []; 
//         if (this.root != null) {
//             Q.push(this.root);
//             while(Q.length > 0) {
//                 let node = Q.shift();
//                 result.push(node.data);
//                 if (node.left != null) {
//                     Q.push(node.left);
//                 };
//                 if (node.right != null) {
//                     Q.push(node.right);
//                 };
//             };
//             return result;
//         } else {
//             return null;
//         };
//     };
//   }
  
  
  
//   const bst = new BST();
  
//   bst.add(9);
//   bst.add(4);
//   bst.add(17);
//   bst.add(3);
//   bst.add(6);
//   bst.add(22);
//   bst.add(5);
//   bst.add(7);
//   bst.add(20);
  
//   console.log(bst.findMinHeight());
//   console.log(bst.findMaxHeight());
//   console.log(bst.isBalanced());
//   bst.add(10);
//   console.log(bst.findMinHeight());
//   console.log(bst.findMaxHeight());
//   console.log(bst.isBalanced());
//   console.log('inOrder: ' + bst.inOrder());
//   console.log('preOrder: ' + bst.preOrder());
//   console.log('postOrder: ' + bst.postOrder());
  
//   console.log('levelOrder: ' + bst.levelOrder());