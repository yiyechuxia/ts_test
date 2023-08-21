const song: string[] = ["覃辉", "梁秀萍"];

enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

const changeDirection3 = (direction: Direction) => {
  console.log(direction);
};

changeDirection3(Direction.UP);
