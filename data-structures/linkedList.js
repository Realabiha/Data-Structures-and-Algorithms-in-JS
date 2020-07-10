// 单链表 data+next next指针指向下一个单元 最后一个单元的next指向一个NULL;
// 双链表 next+data+next 前next指向上一个单元，后一个next指向下一个单元，第一个单元的前next和最后一个单元指向一个NULL
// 循环链表 和单链表相似，只不过最后一个单元next指向第一个单元
// 链表相比数组来说存储数据更加灵活

// 使用ES6的Class实现一个链表

// typeof Node 'function'
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        // this.next = null;
    }
}

class Linkedlist {
    constructor(){
        this.head = new Node('head');
    }
    
    // 查找节点从头节点开始
    find(data){
        let curNode = this.head;
        while(curNode && curNode.data !== data){
            curNode = curNode.next;
        }
        return curNode;
    }
    // 插入节点找到插入节点位置
    insert(newData, data){
        let curNode = this.find(data);
        if(this.find(newData) || !curNode) return;
        let newNode = new Node(newData);
        newNode.next = curNode.next;
        curNode.next = newNode;
        return this;
    }
    // 更新节点找到目标节点
    update(newData, data){
        let curNode = this.find(data);
        if(this.find(newData) || !curNode) return;
        curNode.data = newData;
        return this;
    }
    // 查找前一个节点
    prev(data){
        let curNode = this.head;
        while(curNode && curNode.next && curNode.next.data !== data){
            curNode = curNode.next;
        }
        return curNode;
    }
    // 删除节点找到前一个节点
    delete(data){
        let prevNode = this.prev(data);
        let curNode = this.find(data);
        if(!prevNode || !curNode) return;
        prevNode.next = curNode.next;
        return this;
    }
    // 查找尾节点
    last(){
        let curNode = this.head;
        while(curNode && curNode.next !== null){
            curNode = curNode.next;
        }
        return curNode
    }
    // 查找首节点
    first(){
        let curNode = this.head;
        return curNode.next;
    }
}

const ll = new Linkedlist();
for(let i = 1; i <= 5; i ++){
    let j = i - 1 > 0 ? i - 1 : 'head';  
    ll.insert(i, j);
}
console.debug(ll.update('1', 1).delete('1').find(3));