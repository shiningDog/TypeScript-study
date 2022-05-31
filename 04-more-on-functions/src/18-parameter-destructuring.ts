// 参数解构
type Abc = {
  a: number;
  b: number;
  c: number;
};
function sun({ a, b, c }: Abc) {
  console.log(a + b + c);
}
sun({
  a: 10,
  b: 3,
  c: 9,
});
