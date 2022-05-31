"use strict";
// 实现签名
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(123456789);
const d2 = makeDate(5, 6, 7);
// const d3 =makeDate(5,6)//error 没有需要 2 参数的重载，但存在需要 1 或 3 参数的重载
