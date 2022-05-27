// 调用函数签名（对象声明函数）

type DescribableFunction = {
  description: string; // 函数属性
  (someArgentina: number): boolean; // 参数类型:返回值的类型
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function fun1(n: number) {
  console.log(n);
  return true;
}
// fun1必须拥有类型DescribableFunction所具备的属性
// fun1可以选择是否添加参数
fun1.description = "hello";
doSomething(fun1);
