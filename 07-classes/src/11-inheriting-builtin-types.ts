// 继承内置类型

class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}

const msgError = new MsgError("myError");

// 注意:由于低版本es，如es5当中在执行js代码时:TypeError: msgError.sayHello is not a function
console.log(msgError.sayHello());