// 函数重载 重载签名 和 实现签名

// // 写法一
// function fn(x:string):void
// function fn(){}
// // fn()//error应有 1 个参数，但获得 0 个
// fn('hello')

// // 写法二
// function fn(x: boolean): void;
// function fn(x: string): void;
// function fn(x: boolean | string) {}

// 写法三
function fn(x: string): string;
function fn(x: boolean): boolean;
function fn(x: string | boolean): string | boolean {
  return true;
  // return "hello";
}
