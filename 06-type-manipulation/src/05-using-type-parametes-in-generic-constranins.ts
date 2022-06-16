// 泛型 在泛型约束中使用类型参数
function getPorperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
enum x {
  a = 1,
  b,
}
getPorperty(x, "a");
getPorperty(x, "b");
// getPorperty(x,'c');//error 类型“"e"”的参数不能赋给类型“"a" | "b" | "c" | "d"”的参数。
// getPorperty(x, 1); //error 对于枚举出来的数据，是不会被ts检测到
