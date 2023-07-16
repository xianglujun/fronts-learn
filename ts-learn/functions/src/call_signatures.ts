type DescribleFunction = {
  description: string;
  (n: number): boolean;
};

function doSignatureSomething(fn: DescribleFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function fn1(n: number) {
  console.log(n);
  return n < 12;
}
fn1.description = "hello";

doSignatureSomething(fn1);
