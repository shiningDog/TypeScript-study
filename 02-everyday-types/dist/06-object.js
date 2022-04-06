function printCoord(pt) {
    console.log("\u5750\u6807\u7684x\u503C\u4E3A: ".concat(pt.x));
    console.log("\u5750\u6807\u7684y\u503C\u4E3A: ".concat(pt.y));
}
printCoord({
    x: 11.1,
    y: 22.3
});
function printName(obj) {
    var _a;
    console.log(obj.first + ((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
}
printName({
    first: "shining"
});
printName({
    first: "shining",
    last: "Dog"
});
