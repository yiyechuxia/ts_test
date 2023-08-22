// 方法一：new实例必须写类型
// class GenericNumber<NumType> {
//   defaultNumber: NumType;
//   add: (num1: NumType, num2: NumType) => NumType;
// }


// let gn = new GenericNumber<number>()
// gn.defaultNumber = 10


// 方法二：new实例可省略类型
// class GenericNumber<NumType> {
//     defaultNumber: NumType;
//     add: (num1: NumType, num2: NumType) => NumType;
//     constructor(value:NumType){
//         this.defaultNumber = value
//     }
//   }
  
  
//   let gn = new GenericNumber(100)