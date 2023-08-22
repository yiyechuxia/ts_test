type Type1 = { x: number; y: string; z: boolean };

type Type2 = Type1["x"];

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

interface Props {
  x: number;
  y: boolean;
  a: string;
  b: boolean;
}

type PropsP = MyPartial<Props>;

let obj1: PropsP = {
  x: 1,
};
