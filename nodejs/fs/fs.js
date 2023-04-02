const fs = require("fs")

const callbak = (err) => {
    if (err) {
        console.log(err)
    }
}

// 创建目录
fs.mkdir('./logs', (err) => {
    if (err) {
        console.log("创建文件夹失败:", err)
    }

})

// 创建文件
fs.rename("./logs", "./logs2", callbak)

// 移除文件
fs.rmdir("./logs2", callbak)

// 创建文件
fs.writeFile("./logs2/text.log", "你好~~~~", callbak)
fs.appendFile("./logs2/text.log", "你好~~~~", callbak)

// 去读文件
fs.readFile("./logs2/text.log", {
    encoding: "utf-8"
}, (err, data) => {
    if (!err) {
        console.log("文件内容", data.toString())
    }
})

// 读取文件的状态
fs.stat("./logs2/text.log", (err, data) => {
    console.log(data)
})

// 删除文件
fs.unlink("./logs2/text.log", callbak)
