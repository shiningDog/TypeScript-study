// /** 文字类型 */
// let testString = "hello world";
// testString = "魏泽";
// const constantString = "hello world";
// // constantString = "魏泽"; //error 无法分配，因为它是常数

// let x: "hello" = "hello";
// // x = "world";// error 不能讲类型'world' 分配给 ‘hello’

// function printText(s: string, alignment: "left" | "right" | "center") {}
// // printText("hello", "test");//error 第二个参数由于定义了定制的联合类型
// printText("hello", "left");

// function compare(a: number, b: number): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// }
// compare(0, 0);
// compare(0, 1);
// compare(1, 0);

// interface Options {
//   width: number;
// }
// function configure(x: Options | "auto") {}
// configure({
//   width: 100,
// });
// configure("auto");
// // configure('dasdsa')//error 参数定义了定制的联合类型

// let b1: true = true;
// let b2: false = false;
// let b3: boolean = true;
// b3 = false;

// const obj = {
//   count: 0,
// };
// obj.count++;

// function hanlderRequest(url: string, method: "GET" | "POST" | "GUSS") {}
// // const req = {
// //   url: "https://example.com",
// //   method: "GET",
// // } as const;
// // hanlderRequest(req.url, req.method);

// // const req = {
// //   url: "https://example.com",
// //   method: "GET" as 'GET'
// // hanlderRequest(req.url, req.method);

// // const req = {
// //   url: "https://example.com",
// //   method: "GET",
// // };
// // hanlderRequest(req.url, req.method as "GET");

// // const req = {
// //   url: "https://example.com",
// //   method: "GET",
// // };
// // hanlderRequest(req.url, req.method); //error req.method 是string类型，不是指定的'GET' | 'POST' | 'GUSS'
