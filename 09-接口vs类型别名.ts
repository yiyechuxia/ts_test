// interface paramsTpl{
//     name:string,
//     age:number,
//     sayHi():void
// }

// 类型别名
type paramsTpl2 = {
    name:string,
    age:number,
    sayHi():void
}


const params3:paramsTpl2 ={
    name:'梁秀萍',
    age:18,
    sayHi() {
        console.log('覃辉好帅');
    },
}