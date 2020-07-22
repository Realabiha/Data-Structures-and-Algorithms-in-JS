// binary tree
// add find remove findMin findMax isPresent

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
        let target = this.root;
        if(!target){ 
            this.root = new Node(val); 
            return this;
        };
        const addNode = function(node, val){
            if(node.value < val && node.right){
                addNode(node.right, val)
            }
            if(node.value > val && node.left){
                addNode(node.left, val);
            }
            node.value > val && !node.left ? node.left = new Node(val) : '';
            node.value < val && !node.right ? node.right = new Node(val) : ''; 
        }
        addNode(target, val);
        return this;

    }
    find(val){
        let target = this.root;
        if(!target) return null;
        const findNode = function(node, val){
            if(!node || node.value === val) return node;
            
            if(node.value > val){
                return findNode(node.left, val);
            }
            if(node.value < val){
                return  findNode(node.right, val);
            }
        }
        console.log(findNode(target, val))
        return findNode(target, val);
    }
    remove(val){
        const removeNode = function(node, val){
            if(node == null) return null;
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
                // 双节点
                // 右节点左
                // let tempNode = node.right;
                // while(tempNode.left){
                //     tempNode = tempNode.left;
                // }
                // node.value = tempNode.value;
                // node.right = removeNode(node.right, tempNode.value);
                // return node;

                // 左节点右
                let tempNode = node.left;
                while(tempNode.right){
                    tempNode = tempNode.right;
                }
                node.value = tempNode.value;
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
        return this.root = removeNode(this.root, val)
    }
}

let tree = new Tree().add(30).add(15).add(40).add(12).add(10).add(8).remove(30)
console.dir(tree);