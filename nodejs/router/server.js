const http = require("http")
const route = require('./route')

const port = 8080
const host = "127.0.0.1"
const httpBase = `http://${host}:${port}`
http.createServer((req, res) => {
    var url = new URL(req.url, httpBase)
    console.log(url.pathname)
    // switch (url.pathname) {
    //     case '/login':
    //         res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
    //         res.write(fs.readFileSync('./static/login.html', {
    //             encoding: "utf-8"
    //         }))
    //         break

    //     case '/index':
    //         res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
    //         res.write(fs.readFileSync('./static/index.html', {
    //             encoding: "utf-8"
    //         }))
    //         break
    //     default:
    //         res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" })
    //         res.write(fs.readFileSync('./static/404.html', {
    //             encoding: "utf-8"
    //         }))
    // }
    try {
        console.log(__dirname)
        route[url.pathname](res)
    } catch (error) {
        route['/404'](res)
    }
    res.end()
}).listen(port, () => {
    console.log(`服务已启动，端口: ${port}`)
})