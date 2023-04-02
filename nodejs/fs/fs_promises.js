const fs = require("fs").promises

fs.readFile("./logs2/text1.log", {
    encoding: "utf-8"
}).then(data => {
    console.log(data.toString())
})
    .catch(err => {
        console.log("err:", err)
    })