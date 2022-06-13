// 反省 - 使用通用类型变量

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
loggingIdentity(["100", 200]);
