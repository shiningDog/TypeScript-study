"use strict";
// 条件类型
function creatLabel(idOrName) {
    throw "";
}
// type a = NameLabel
let a = creatLabel("typescript");
// type b = IdLabel
let b = creatLabel(2.77);
// type c = NameLabel | IdLabel
let c = creatLabel(Math.random() > 0.5 ? "hello" : 42);
