// // 断言 建议使用 as
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

// // let x = (<any>"hello") as number;
// let x = "hello" as any as number;
// let y = (<unknown>"hello") as number;
// // 总结：
// // 断言是为了保证未知数据格式的一种校验方式
// // 使用场景：
// // 1.当你确定未知数据是某一种格式时
// // 2.当你大概知道未知数据格式时
