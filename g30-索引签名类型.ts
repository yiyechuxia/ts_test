interface anyObj {
  [key: string]: number;
}

let obj: anyObj = {
  a: 1,
  b: 2,
  c: 3,
};

interface anyArray<Type> {
  [index: number]: Type;
}

let arrays: anyArray<number> = [1, 2, 3];


