// 交叉类型

interface ColorFul {
  color: string;
}
interface Circle {
  radius: number;
}
type ColorFulCircle = ColorFul & Circle;
const cc: ColorFulCircle = {
  color: "red",
  radius: 18,
};

function draw(circle: ColorFul & Circle) {
  console.log(circle.color);
  console.log(circle.radius);
}
draw({
  color: "red",
  radius: 100,
});
