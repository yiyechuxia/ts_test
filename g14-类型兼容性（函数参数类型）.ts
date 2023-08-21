// 参数类型：相同位置上的参数类型要相同或兼容
// type F1 = (a:number) => string
// type F2 = (a:number) => string

// let f1 : F1 = ()=>{return '1'}
// let f2 : F2

// f2 = f1

// 对象类型
interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

type F1 = (p: Point2D) => void;

type F2 = (p: Point3D) => void;

let f1: F1 = ({ x = 1, y = 1 }) => {};
let f2: F2;


f2 = f1