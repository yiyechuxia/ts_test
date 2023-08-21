class Person {
    name:string
    age:number

    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}

const p = new Person('梁秀萍', 18)

console.log(p.name , '======', p.age);
