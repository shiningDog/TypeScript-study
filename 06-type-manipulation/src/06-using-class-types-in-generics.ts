// 泛型 在泛型中使用类类型

// function creat<T>(c: { new (): T }): T {
//   return new c();
// }
// 养蜂人
class Beekeeper {
  hasMask: boolean = true;
}

// 动物园管理员
class ZooKeeper {
  nametag: string = "Mikie";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: Beekeeper = new Beekeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function creatInstance<T extends Animal>(c: { new (): T }): T {
  return new c();
}
creatInstance(Lion).keeper.nametag;
creatInstance(Bee).keeper.hasMask;
// creatInstance(Beekeeper); //error 类型 "Beekeeper" 中缺少属性 "numLegs"，但类型 "Animal" 中需要该属性
