// 分配缩小
let assign = Math.random() < 0.5 ? 1 : "hellow";
// 此时的assign可以是string 类型也可以是number类型
assign = 23;
assign = "world";

// 当分配到其他类型时，将报错
// assign = false;
