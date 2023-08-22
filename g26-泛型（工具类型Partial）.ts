interface Props {
  id: number;
  name: string;
}

// Partial<Type> 用来构造（创建）一个类型，将Type的所有属性设置为可选
type PartialProps = Partial<Props>;

let p1: Props = {
  id: 1,
  name: "梁秀萍",
};

let p2: PartialProps = {
  name: "覃辉",
};
