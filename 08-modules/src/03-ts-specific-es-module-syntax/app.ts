// TS中特定的ES模块语法 

// 引入方案一
// import type { Cat, Dog } from "./animal";
// import { creatCatName } from "./animal";
// 引入方案二
import { type Cat, type Dog, creatCatName } from "./animal";
type Animal = Cat | Dog;
creatCatName();
