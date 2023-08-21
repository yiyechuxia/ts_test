interface Singable {
    name:string
    sing():void
}

class Person implements Singable {
    name = '小苹果'
    sing(): void {
        console.log('66666666');
        
    }
}