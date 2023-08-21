var song = ["覃辉", "梁秀萍"];
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
var changeDirection3 = function (direction) {
    console.log(direction);
};
changeDirection3(Direction.UP);
