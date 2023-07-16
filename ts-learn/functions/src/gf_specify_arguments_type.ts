function combine<Type>(a: Type[], b: Type[]): Type[] {
  return a.concat(b);
}

// 通过调用方式的时候指定类型，使传参正确，一般不这么做
console.log(combine<string | number>([1, 2, 3], ["hello"]));
