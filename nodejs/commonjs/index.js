let moduleA = require("./a")
let moduleC = require("./c")
let moduleb = require("./b")

console.log(moduleA)
moduleA.test()
console.log(moduleA.upper('xianglujun'))
moduleb()
moduleC()
