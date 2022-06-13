// 可选属性
type Shape = {};
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

// function paintShape(opts: PaintOptions) {
//   let xPos = opts.xPos === undefined ? 0 : opts.xPos;
//   let yPos = opts.yPos === undefined ? 0 : opts.yPos;
//   console.log(xPos, yPos);
// }

// 解构使用默认值
function paintShape({
  shape: Shpee,
  xPos: number = 0,
  yPos = 0,
}: PaintOptions) {
  console.log(Shpee, number);
}

const shape: Shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 200 });
paintShape({ shape, xPos: 100, yPos: 200 });
