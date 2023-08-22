// function id<Type>(value:Type):Type {
//     return value
// }


// // 调用泛型函数
// const num = id<number>(10)


// 箭头函数形式
const id = <Type>(value:Type):Type =>{
    return value
}


// const num = id<number>(10)

// console.log(num);

const str = id<String>('10')

console.log(str);
