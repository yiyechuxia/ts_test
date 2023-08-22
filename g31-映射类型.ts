type PropKey = 'x' | 'y' | 'z' | 'a' | 'b' | 'c'

type obj1 = {x:number,y:number,z:number}

type obj2 = {[Key in PropKey] : number}

// 错误演示
// interface IKeys {
//     [Key in PropKey] : number
// }

