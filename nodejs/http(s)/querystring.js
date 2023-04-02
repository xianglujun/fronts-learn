let querystring = require("querystring")

let str = "name=xiagl&age=12&location=alia"
var obj = querystring.parse("querystring")
console.log(obj)
console.log(querystring.parse(str))

// stringify
var param = {
    "name": "xianglu",
    "age": 12
}
let paraStr = querystring.stringify(param)
console.log(paraStr)

// 转义替换
let escape = querystring.escape(str)
console.log(escape)
console.log(querystring.unescape(escape))