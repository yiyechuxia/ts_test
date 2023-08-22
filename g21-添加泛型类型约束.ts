interface Ilength {
  length: number;
}

// 箭头函数形式
const id = <Type extends Ilength>(value: Type): Type => {
  console.log(value.length);
  return value;
};

const num1 = id([10])
const num2 = id(['abc'])
const num3 = id({name:"梁秀萍",length:10})

// 错误演示
// const num4 = id(4)
