// 类里的static区块
// #count 只能在内部用该类Foo去使用
class Foo {
  static #count = 0;
  get count() {
    return Foo.#count;
  }
  static {
    try {
      const lastInstance = {
        length: 100,
      };
      Foo.#count += lastInstance.length;
    } catch {}
  }
}

// Foo.#count //error 属性 "#count" 在类 "Foo" 外部不可访问，因为它具有专用标识符。
const foo = new Foo();
console.log(foo.count); //100
