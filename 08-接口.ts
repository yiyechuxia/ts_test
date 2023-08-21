interface paramsTpl{
    name:string,
    age:number,
    sayHi():void
}


const params1:paramsTpl ={
    name:'梁秀萍',
    age:18,
    sayHi() {
        console.log('覃辉好帅');
    },
}

const params2:paramsTpl = {
    name:'李狗蛋',
    age:999,
    sayHi() {
        console.log('哑屎啦，梁非凡');
        
    },
}

params1.sayHi()
