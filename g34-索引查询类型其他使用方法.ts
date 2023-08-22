type Type1 = { x: number; y: string; z: boolean };

type Type2 = Type1["x" | "y"];

type Type3 = Type1[keyof Type1]
