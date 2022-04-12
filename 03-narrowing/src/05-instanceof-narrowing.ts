// instanceof 操作符缩小
function logValue(x: Date | string) {
  // 判断 是Date类型
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    // 否则是字符串类型
    console.log(x.toUpperCase());
  }
}
logValue(new Date());
logValue("hello ts");
