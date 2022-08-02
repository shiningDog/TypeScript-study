"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ES模块语法
const hello_1 = __importDefault(require("./hello"));
const math_1 = require("./math");
(0, hello_1.default)();
console.log(math_1.pi);
console.log((0, math_1.absolute)(math_1.phi));
