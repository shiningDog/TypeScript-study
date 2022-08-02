// 额外的导入语法

// import RNGen, { pi as π } from "./math";
// console.log(π);
// const rnGen = new RNGen();
// console.log(rnGen);
import * as math from "./math";
console.log(math.pi);
const rnGen = new math.default();
console.log(rnGen);
