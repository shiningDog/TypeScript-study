// readonly

class Greeter {
  readonly name: string = "world";
  constructor(hello?: string) {
    if (hello !== undefined) {
      this.name = hello!;
    }
  }
  // err() {
  //   this.name = "not ok"; //error 无法分配到 "name" ，因为它是只读属性。
  // }
}

const gt = new Greeter("hello");
// gt.name = "a"; //error 无法分配到 "name" ，因为它是只读属性。
console.log(gt.name);
