"use strict";
// 回调中的可选参数
// 当你为回调写一个函数类型时，永远不要写一个可选参数，除非你打算在不传递该参数的情况下调用函数
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // callback(arr[i], i);
        callback(arr[i]);
    }
}
// myForEach(["张三", "李四", "王五"], (name) => console.log(name));
myForEach(["张三", "李四", "王五"], (name, index) => {
    console.log(name);
    //error index属性在myForEach的回调中可能为空
    // 所以，永远不要写一个可选参数做为回调函数的参数，除非你打算在使用该参数的情况下调用函数
    // console.log(index.toFixed());
});
