const http = require("http");

const server = http.createServer((request, response) => {
    let url = request.url;
    response.write(url);
    response.end(); // 表示结束写出信息，并关闭
});

server.listen(8080, "localhost", () => {
    console.log("localhost:8080");
});
