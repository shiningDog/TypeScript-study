// 泛型 泛型约束

interface Lengthwise {
  length: number;
}

function logginIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// logginIdentity(3) //error 类型“number”的参数不能赋给类型'Lengthwise'的参数
logginIdentity([]);
logginIdentity({ length });
