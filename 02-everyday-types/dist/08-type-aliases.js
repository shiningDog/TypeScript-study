"use strict";
function printPoint(pt) {
    console.log(`x = ${pt.x} , y= ${pt.y}`);
}
printPoint({
    x: 100,
    y: 101,
});
function printId(id) { }
printId(100);
printId("101");
function sanitizedInput(str) {
    return str.slice(0, 2);
}
console.log(sanitizedInput("abcd"));
