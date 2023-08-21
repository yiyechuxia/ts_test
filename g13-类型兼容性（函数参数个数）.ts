type F1 = (num1: number) => void;

type F2 = (num1: number, num2: number) => void;

let f1: F1 = () => {};

let f2: F2;

// 函数参数少的可以赋值给函数参数多的
f2 = f1;
