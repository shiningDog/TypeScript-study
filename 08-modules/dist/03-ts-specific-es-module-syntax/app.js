"use strict";
// TS中特定的ES模块语法 
Object.defineProperty(exports, "__esModule", { value: true });
// 引入方案一
// import type { Cat, Dog } from "./animal";
// import { creatCatName } from "./animal";
// 引入方案二
const animal_1 = require("./animal");
(0, animal_1.creatCatName)();
