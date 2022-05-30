// 泛型函数 - 制定类型参数
function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}
combine([1, 2, 3], [2, 3, 4]);
// combine([1, 2, 3], ["2", "3", "4"]);//error ts推断此时泛型应该为number,而arr2参数却为string
combine<number | string>([1, 2, 3], ["2", "3", "4"]); //不推荐强制转换，但这里可以指定泛型类型
