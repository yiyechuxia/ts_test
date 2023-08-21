// 类型兼容性
// const a : string[] = ['a','b','c'];

// a.forEach(item=>{})
// a.forEach((item,index)=>{})
// a.forEach((item,index,array)=>{})


// 两个类型
class point {
    x:number
    y:number
}

class point2D{
    x:number
    y:number
}


const p : point = new point2D()