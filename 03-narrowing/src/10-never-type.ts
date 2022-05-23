// never (不应该存在的状态) 类型与穷尽性检查
// never可以分配给每个类型，但没有任何类型可以分配给never，除本身以外,便于进行与穷尽性检查
interface Circle {
  kind: "circle";
  redius: number;
}

interface Square {
  kind: "square";
  sideLenght: number;
}

interface Triangle {
  kind:'triangle'
  sideLength:number
}

type Shape = Circle | Square | Triangle;

// 使用分支类型缩小判断该类型
function getArea(shape: Shape) {
  // 方案二
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.redius ** 2;
    case "square":
      return shape.sideLenght ** 2;
    // default:
      // const _exhaustiveCheck: never = shape; //error，还可能存在triangle类型没做分支判断，这里使用never就可以进行穷尽性检查，
      // return _exhaustiveCheck;
  }
}
