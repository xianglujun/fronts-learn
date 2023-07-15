// 通过instanceof缩小范围
function narrowingInstanceOf(s: String | number) {
  if (s instanceof String) {
    console.log(s.toUpperCase());
  } else {
    console.log(s * 100);
  }
}

narrowingInstanceOf(23);
narrowingInstanceOf(new String("ccss"));
