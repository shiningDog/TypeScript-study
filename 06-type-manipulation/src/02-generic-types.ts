// 泛型-泛型类型

function identity<T>(arg: T): T {
  return arg;
}

// let myIdentity: <T>(arg: T) => T = identity;

// 任意名字的泛型都可
// let myIdentity: <alias>(arg: alias) => alias = identity;

// 使用 调用函数签名的方式定义类型
// let myIdentity: { <T>(arg: T): T } = identity;

// 使用调用函数签名来实现泛型接口定义
// interface GenericIdentityFu {
//   <T>(arg: T): T;
// }
// let myIdentity: GenericIdentityFu = identity;

// 抽离泛型给接口定义，使用上会更加明确，友好
interface GenericIdentityFu<T> {
  (arg: T): T;
}
let myIdentity: GenericIdentityFu<string> = identity;
