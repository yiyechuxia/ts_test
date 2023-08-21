type F1 = ()=>string
type F2 = ()=>string


let f1 : F1 = ()=>{return '1'}
let f2 : F2 = ()=>{return '1'}

f1 = f2
f2 = f1


type F3 = ()=> {name:string}
type F4 = ()=>{name:string,age:number}

let f3 : F3 = () => { return {name:"梁秀萍"}}
let f4 : F4 = () => { return {name:"梁秀萍",age:18}}


f3 = f4


// 错误演示
// f4 = f3