const http = require("http");
const url = require('url')

const server = http.createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    })
    response.write("请求的链接地址为:" + url);
    response.end(); // 表示结束写出信息，并关闭
});

server.listen(8080, "localhost", () => {
    console.log("localhost:8080");
});

var parseData = url.parse("https://www.baidu.com?http=true&a=2sa", true)
console.log(parseData)

// 已经被废弃
var reqUrl = url.resolve("/api/node/js", "as")
console.log(reqUrl)

// 新版url的使用
var newUrl = new URL("/api?method=post", "http://localhost:8080/host?method=get")
console.log("新版的url:", newUrl)

// fileUrlToPath的使用
console.log("文件路径", new URL("file:c:/path/").pathname)
console.log("文件路径", new URL("file:c:/path/你好.txt").pathname)
console.log("文件路径", url.fileURLToPath("file:c:/path/"))
console.log("文件路径", url.fileURLToPath("file:c:/path/你好.txt"))