let http = require('http')
let https = require('https')
let url = require("url")

http.createServer((req, res) => {
    let reqUrl = url.parse(req.url, true)
    console.log(reqUrl)
    let path = reqUrl.pathname

    // 解决跨域问题
    res.writeHead(200, {
        "Content-Type": "application/json;charset-utf-8",
        "access-control-allow-origin": "*"
    })

    switch (path) {
        case '/api/method':

            res.end(`${JSON.stringify({
                name: "xianglj",
                age: 100
            })}`)
            break
        case '/api/data':
            httpGet((data) => {
                res.end(data)
            })
            break
        default:
            res.end(`请求地址: ${req.url}`)
    }
}).listen(8080, () => {
    console.log("server started")
})

function httpGet(callback) {
    let data = ""
    https.get('https://catfront.dianping.com/api/batch?v=1&sdk=1.7.11'
        , (res) => {
            res.on('data', (chunk) => {
                data += chunk
            })

            res.on("end", () => {
                console.log("请求响应数据", data)
                callback(data)
            })
        })
}

function httpPost(callback) {
    let data = ""
    var options = {
        hostname: "m.xiaomiyoupin.com",
        port: "443",
        path: "/path",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }

    var req = https.request(options, (res) => {
        res.on("data", (chunk) => {
            data += chunk
        })

        res.on("end", () => {
            callback(data)
        })
    })

    req.write(JSON.stringify([{}, { "baseParam": { "ypcient": 1 } }]))
    req.end()
}