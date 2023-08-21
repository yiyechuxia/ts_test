class Animal {
    move(){
        console.log('高速移动');
        
    }
}

class Dog extends Animal {
    back(){
        console.log('回家');
        
    }
} 


const ddd = new Dog()

ddd.back()
ddd.move()
