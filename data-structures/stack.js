// es6 创建一个模拟栈数据结构的类
// 实现一个likeStack类,先进后出
class likeStack{
    constructor(){
        this.length = 0;
        this.storage = {};
    }
    add(val){
        this.length ++;
        this.storage[this.length] = val;
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
        return this.storage[this.length];
    }
}