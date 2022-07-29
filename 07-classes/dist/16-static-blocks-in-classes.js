"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Foo_count;
// 类里的static区块
// #count 只能在内部用该类Foo去使用
class Foo {
    get count() {
        return __classPrivateFieldGet(Foo, _a, "f", _Foo_count);
    }
}
_a = Foo;
_Foo_count = { value: 0 };
(() => {
    var _b;
    try {
        const lastInstance = {
            length: 100,
        };
        __classPrivateFieldSet(_b = Foo, _a, __classPrivateFieldGet(_b, _a, "f", _Foo_count) + lastInstance.length, "f", _Foo_count);
    }
    catch (_c) { }
})();
// Foo.#count //error 属性 "#count" 在类 "Foo" 外部不可访问，因为它具有专用标识符。
const foo = new Foo();
console.log(foo.count); //100
