"use strict";
// 交叉类型
const cc = {
    color: "red",
    radius: 18,
};
function draw(circle) {
    console.log(circle.color);
    console.log(circle.radius);
}
draw({
    color: "red",
    radius: 100,
});
