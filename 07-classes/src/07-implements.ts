// 继承 implements字句
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log("Ping!");
  }
}

class Ball implements Pingable {
  ping(): void {}
  pong() {}
}

interface A {
  a(): void;
}
interface B {
  b(): void;
}

class C implements A, B {
  a(): void {}
  b(): void {}
}

interface Checkable {
  check(name: string): boolean;
}

class NameCheck implements Checkable {
  check(s: string) {
    return s.toLowerCase() === "ok";
  }
}

interface D {
  x: number;
  y?: number;
}
class E implements D {
  x = 0;
  y = 1;
}

const f = new E();
console.log(f.x);
console.log(f.y);
