const moduleA = require("./a")

function test() {
    console.log(moduleA.upper("test-bbb"))
}

module.exports = test