"use strict";
// 泛型函数 - 制定类型参数
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
combine([1, 2, 3], [2, 3, 4]);
// combine([1, 2, 3], ["2", "3", "4"]);//error ts推断此时泛型应该为number,而arr2参数却为string
combine([1, 2, 3], ["2", "3", "4"]); //不推荐强制转换，但这里可以指定泛型类型
