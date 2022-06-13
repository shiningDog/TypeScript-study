// 泛型 泛型类

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGeneric = new GenericNumber<string>();
myGeneric.zeroValue = "0";
myGeneric.add = function (x, y) {
  return x + y;
};
console.log(myGeneric);

