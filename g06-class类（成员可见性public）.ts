class Animal {
    // public 公开的，在类/子类/实例对象中均可调用
   public move(){
        console.log('高速移动');
        
    }
}


const a = new Animal();
a.move()

class Dog extends Animal {
    back(){
        console.log('回家');
        
    }
} 


const ddd = new Dog()

ddd.back()
ddd.move()
