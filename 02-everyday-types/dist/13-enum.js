"use strict";
// 枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
// {
//   '1': 'Up',
//   '2': 'Down',
//   '3': 'Left',
//   '4': 'Right',
//   Up: 1,
//   Down: 2,
//   Left: 3,
//   Right: 4
// }
console.log(Direction.Up);
// 1
