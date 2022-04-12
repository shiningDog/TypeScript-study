"use strict";
// 真值缩小
function printAll(strs) {
    if (strs && typeof strs === "object") {
        //使用 真 值缩小，strs && typeof strs === "object"
        for (const s of strs) {
            //error：, 当strs=null时，typeof strs === ''object
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // ...
    }
}
function multuplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => {
            return x * factor;
        });
    }
}
console.log(multuplyAll([3, 4], 2));
console.log(multuplyAll(undefined, 2));
