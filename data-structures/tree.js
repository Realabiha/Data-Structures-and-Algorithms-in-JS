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