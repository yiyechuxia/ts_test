interface Props {
  id: number;
  name: string;
}

// Readonly<Type>用来构造一个类型，将Type的所有属性都设置为readonly（只读）
type ReadonlyProps = Readonly<Props>;

let rp :ReadonlyProps = {
  id: 1,
  name: "梁秀萍",
};

// rp.id = 2; //修改值会报错
