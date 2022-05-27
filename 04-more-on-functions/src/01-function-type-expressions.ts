// 函数类型表达式
type greeterFun = (a: string) => void;

function greeter(fn: greeterFun) {
  fn("hello world");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
