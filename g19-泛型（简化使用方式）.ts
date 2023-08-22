
// 箭头函数形式
const id = <Type>(value:Type):Type =>{
    return value
}


// 普通写法
const num = id<number>(10)

console.log(num);

const str = id<String>('10')

console.log(str);


// 简化写法
const num1 = id(10)
const str1 = id('10')
