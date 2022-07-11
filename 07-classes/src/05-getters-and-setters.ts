// getters -setters
// 其实就是数据劫持
// 如果没有设置set修饰符，那么_length会变成只读
// 如果setters中没有定义数据类型，则按照getters中的返回的数据类型去定义

// class C {
//   _length = 0;
//   get length() {
//     return this._length;
//   }
//   set length(val) {
//     this._length = val;
//   }
// }
// const c = new C();
// console.log(c.length);
// c.length = 100;
// console.log(c.length);

// class Thing {
//   _size = 0;
//   get size(): number {
//     return this._size;
//   }
//   set size(val: string | number | boolean) {
//     val = Number(val);
//     if (!Number.isFinite(val)) val = 0;
//     this._size = val;
//   }
// }
// const thing = new Thing();
// console.log(thing.size);
// thing.size = 100;
// console.log(thing.size);
// thing.size = "hello";
// console.log(thing.size);
