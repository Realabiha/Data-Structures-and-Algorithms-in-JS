// 栈 类比生活中的容器 先进后出
// push pop size peek
class likeStack{
    constructor(){
        this.length = 0;
        this.storage = {};
    }
    push(val){
        this.length ++;
        this.storage[this.length] = val;
        return this;
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }
        const val = this.storage[this.length]; 
        delete this.storage[this.length];
        this.length --;
        console.log(val)
        return val;
    }
    size(){
        return this.length;
    }
    peek(){
        if(this.length < 1) return undefined;
        return this.storage[this.length - 1];
    }
}

// let ls = new likeStack();
// ls.peek();
// ls.pop();
// ls.size();
// ls.push(1);
// console.dir(ls.pop());
