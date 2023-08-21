class Animal {
    // protected 受保护的，只在类或子类方法中调用，实例对象无法调用
    protected move(){
        console.log('高速移动');
        
    }
    run(){
        this.move()
        console.log('跑呀跑呀跑');
        
    }
}


const a = new Animal();
// a.move()

class Dog extends Animal {
    back(){
        console.log('回家');
        this.move()
    }
} 


const ddd = new Dog()

ddd.back()
// ddd.move()
