// 集合 类比数学中的集合 无序 元素不重复
// add remove values size union cross diff sub
class Likeset{
    constructor(){
        this.set = [];
    }
    has(item){
        return this.set.indexOf(item) > -1;
    }
    add(item){
        if(this.has(item)) return undefined;
        this.set.push(item);
        return this;
    }
    remove(item){
        if(!this.has(item)) return undefined; 
        // for(let i = 0; i < this.set.length; i ++){
        //     if(this.set[i] === item){
        //         this.set.splice(i, 1);
        //         break;
        //     }
        // }
        const index = this.indexOf(item);
        this.set.splice(index, 1);
        return this; 
    }
    values(){
        return this.set;
    }
    size(){
        return this.set.length;
    }
    // 并集
    union(set){
        let ls = new Likeset();
        let final = set.values().concat(this.set);
        final.forEach(v => {
            // if(!ls.has(v)) ls.add(v);
            ls.add(v);
        })
        return ls;
    }
    // 交集
    cross(set){
        let ls = new Likeset();
        set.values().forEach(v => {
            if(this.has(v)) ls.add(v);
        })
        return ls;
    }
    // 差集(set 与 this 的差集)
    diff(set){
        // let union = this.union(set);
        // let cross = this.cross(set);
        // cross.values().forEach(v => {
        //     union.remove(v);
        // })
        // return union;

        let ls = new Likeset();
        set.values().forEach(v => {
            if(!this.has(v)) ls.add(v);
        })
        return ls;
    }
    // 子集(set 是 A的子集)
    sub(set){
        return set.values().every(v => this.has(v)) && set.size() <= this.size();
    }
}

// let ls = new Likeset();
// ls.has(1);
// ls.values();
// ls.size();
// ls.add(2);
// ls.remove(2);
// ls.add(1);

// let ls1 = new Likeset();
// ls1.add(2);
// ls1.add(3);
// let union = ls.union(ls1);
// let cross = ls.cross(ls1);
// let diff = ls.diff(ls1);
// console.log(ls.sub(cross));