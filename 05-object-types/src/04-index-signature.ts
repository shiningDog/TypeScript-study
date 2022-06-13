// 索引签名

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["a", "b"];
const secondItem = myArray[0];

interface TestString {
  [props: string]: number;
}

const testString: TestString = {
  x: 100,
  y: 200,
  // z: "300", //error 不能将类型“string”分配给类型“number”
};

interface Animal {
  name: string;
}
interface Dog extends Animal {
  bread: string;
}

interface NotOkay {
  [index: string]: number | string;
  length: number;
  name: string;
}

const notOkay: NotOkay = {
  x: 100,
  y: 200,
  length: 10,
  name: "Felix",
};

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

const myArray2: ReadonlyStringArray = ["a", "b"];
// myArray2[0] = "felix"; //error 类型“ReadonlyStringArray”中的索引签名仅允许读取
