// 构造函数签名
class Ctor {
  s: string;
  constructor(s: string) {
    this.s = s;
  }
}

type SomeConstructor = {
  new (s: string): Ctor;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

let f = fn(Ctor);
console.log(f.s);

// 通过interface的方式来实现
interface CallOrConstructor {
  new (s: string): Date;
  (n?: number): Date;
}

function fn2(c: CallOrConstructor) {
  let d = new c("2023-07-16");
  let f = c(100);

  console.log(d, f);
  return d;
}
