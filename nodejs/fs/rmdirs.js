const fs = require("fs")

// 删除指定目录
function rmdirs(path) {
    console.log("移除文件:", path)
    // 读取文件是否存在
    var stats = fs.statSync(path)
    if (!stats) {
        console.log("删除文件失败")
        return
    }
    console.log(stats)
    let isFile = stats.isFile()
    if (isFile) {
        console.log("rmFile:", path)
        // 删除文件
        rmFile(path)
    } else if (stats.isDirectory()) {
        console.log("目录信息:", path)
        var items = fs.readdirSync(path, {
            encoding: "utf-8",
            withFileTypes: true
        })
        console.log("文件列表:", items)
        items.forEach(item => {
            rmdirs(`${path}/${item.name}`)
        })

        // 删除目录
        rmDir(path)
    }
}

function rmFile(filepath) {
    fs.unlinkSync(filepath)
}

function rmDir(dirPath) {
    fs.rmdirSync(dirPath)
}

rmdirs("./logs2")