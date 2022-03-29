function printCoord(pt: { x: number; y: number }) {
  console.log(`坐标的x值为: ${pt.x}`);
  console.log(`坐标的y值为: ${pt.y}`);
}
printCoord({
  x: 11.1,
  y: 22.3,
});

function printName(obj: { first: string; last?: string }) {
  console.log(obj.first + obj.last?.toUpperCase());
}
printName({
  first: "shining",
});
printName({
  first: "shining",
  last: "Dog",
});
