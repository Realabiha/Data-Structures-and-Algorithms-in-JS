// enqueue dequeue peek size isEmpty

// 数组队列
class ArrayQueue{
    constructor(){
        this.queue = [];
        this.size = 0;
    }
    enqueue(val){
        this.queue.unshift(val);
        this.size ++;
        return this;
    }
    dequeue(){
        if(this.isEmpty()) return;
        this.size --;
        return this.queue.pop();
    }
    peek(){
        if(this.isEmpty()) return;
        return this.queue[this.size - 1];
    }
    isEmpty(){
        return this.size == 0;
    }
}

// 链表队列
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
// 链表队列
class LinkedQueue{
    constructor(){
        this.head = new Node('head');
        this.size = 0;
    }
    enqueue(val){
        let last = this.head;
        while(last.next){
            last = last.next;
        }
        last.next = new Node(val);
        this.size ++;
        return this;
    }
    dequeue(){
        let first = this.head.next;
        if(first) {
            this.head.next = first.next;
            first.next = null;
        }
        this.size --;
        return first;
    }
    peek(){
        let first = this.head.next;
        return first ? first.value : null;
    }
    isEmpty(){
        return this.size == 0;
    }
}
// 优先队列
class PriorityQueue{
    constructor(){
        this.queue = [];
        this.size = 0;
    }
    enqueue(obj){
        if(this.isEmpty() || this.queue[this.size - 1].priority <= obj.priority){
            this.queue.push(obj);
        }else if(this.queue[0].priority > obj.priority){
            this.queue.unshift(obj);
        }
        else{
            for(let i = 0; i < this.size - 1; i ++){
                let left = this.queue[i], right = this.queue[i + 1];
                if(left.priority <= obj.priority && right.priority > obj.priority){
                    this.queue.splice(i+1, 0, obj);
                    break;
                }
            }
        }
        this.size ++;
        return this;
    }
    dequeue(){
        if(this.isEmpty()) return;
        this.size --;
        return this.queue.pop().value;
    }
    peek(){
        if(this.isEmpty()) return;
        return this.queue[this.size - 1].value;
    }
    isEmpty(){
        return this.size == 0;
    }
}