"use strict";
class Sonar {
    ping() {
        console.log("Ping!");
    }
}
class Ball {
    ping() { }
    pong() { }
}
class C {
    a() { }
    b() { }
}
class NameCheck {
    check(s) {
        return s.toLowerCase() === "ok";
    }
}
class E {
    constructor() {
        this.x = 0;
        this.y = 1;
    }
}
const f = new E();
console.log(f.x);
console.log(f.y);
