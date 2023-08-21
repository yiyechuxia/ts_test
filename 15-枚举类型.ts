enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const changeDirection2 = (direction: Direction) => {
  console.log(direction);
};

// 访问枚举成员
changeDirection2(Direction.UP)