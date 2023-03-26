function test() {
    console.log("test-aaa")
}

console.log("我是来自a.js中的输出")

function upper(str) {
    if (!str) {
        return ''
    }

    return str.substring(0, 1).toUpperCase() + str.substring(1)
}

module.exports = { test, upper }