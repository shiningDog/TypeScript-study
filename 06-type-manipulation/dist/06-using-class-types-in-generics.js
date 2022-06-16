"use strict";
// 泛型 在泛型中使用类类型
// function creat<T>(c: { new (): T }): T {
//   return new c();
// }
// 养蜂人
class Beekeeper {
    constructor() {
        this.hasMask = true;
    }
}
// 动物园管理员
class ZooKeeper {
    constructor() {
        this.nametag = "Mikie";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new Beekeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function creatInstance(c) {
    return new c();
}
creatInstance(Lion).keeper.nametag;
creatInstance(Bee).keeper.hasMask;
// creatInstance(Beekeeper); //error 类型 "Beekeeper" 中缺少属性 "numLegs"，但类型 "Animal" 中需要该属性
