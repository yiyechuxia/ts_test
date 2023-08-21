// interface A {
//     fn:(value:string)=>string
// }

// interface B extends A{
//     fn:(value : number) => string
// }

// =========================================

interface A {
    fn:(value:string) => string
}

interface B{
    fn:(value : number) => string
}

type C = A & B

let c : C = {
    fn(value:string | number){
        return '1'
    }
}

c.fn(1)
c.fn('1')
