interface point {
  x: number;
  y: number;
}
interface point2D {
  x: number;
  y: number;
}
interface point3D {
  x: number;
  y: number;
  z: number;
}

let p1: point = { x: 0, y: 0 };
let p2: point2D;
let p3: point3D = { x: 0, y: 0, z: 0 };

// 接口与类之间也通用
class Point4D {
  x: number;
  y: number;
  z: number;
}

p2 = p1;
p1 = p3;

let p: point = new Point4D();
