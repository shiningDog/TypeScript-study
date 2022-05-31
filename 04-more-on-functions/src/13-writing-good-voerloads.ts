// 函数重载-编写好的重载

// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }
// len("hello");
// len([1, 2, 3]);
// len(Math.random() > 0.5 ? "hello" : [4, 5, 6]);//error 联合类型不能被赋值

// 最好的直接使用
function len(x: any[] | string) {
  return x.length;
}
len(Math.random() > 0.5 ? "hello" : [4, 5, 6]);
