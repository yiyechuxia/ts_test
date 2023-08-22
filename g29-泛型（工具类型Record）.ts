
// Record<Keys,Type>构造一个对象类型，属性键为Keys，属性类型为Type
type RecordObj = Record<'a'| 'b' | 'c' , string[]>

let obj : RecordObj = {
    a : ['a'],
    b : ['b'],
    c : ['c'],
}