// 实现0-20之间得随机数
function randomNum(num) {
    var ran = Math.random();
    num++;
    var res = ran * num;
    return Math.floor(res)
}

// 获取两个数之间得随机数
function randomNum(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start)
}