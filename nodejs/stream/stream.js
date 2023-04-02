const fs = require("fs")
const rs = fs.createReadStream("./text.log", "utf-8")

rs.on("data", (chunk) => {
    console.log("chunk=>", chunk)
})

rs.on("end", () => {
    console.log("end")
})

rs.on("error", (err) => {
    console.log(err)
})