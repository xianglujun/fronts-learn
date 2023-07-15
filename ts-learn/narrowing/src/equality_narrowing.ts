// 等值缩小
function printAll1(s: string[] | string | null) {
  // 可以通过if条件过滤掉为false的值
  if (s !== null) {
    if (typeof s === "object") {
      for (const e of s) {
        console.log(e);
      }
    } else if (typeof s === "string") {
      console.log(s.toUpperCase());
    } else {
      console.log("other");
    }
  }
}

interface Container {
  value: number | undefined | null;
}

function multiplyContainerVal(container: Container, factor: number) {
  if (container.value != null) {
    // 这里可以过滤null和undefineds
    console.log("container.val", container.value);
    container.value *= factor;
  }
}

multiplyContainerVal({ value: 6 }, 5);
multiplyContainerVal({ value: undefined }, 5);
multiplyContainerVal({ value: null }, 5);
