class Person {
    // readonly 只能在类中或构造函数中使用
  readonly age: number = 18;

  constructor(age:number) {
    this.age = age;
  }

//   setAge(){
//     this.age = 20
//   }
}
