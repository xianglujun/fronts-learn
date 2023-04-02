const fs = require("fs")
const readStream = fs.createReadStream("./text.log")
const writeStream = fs.createWriteStream("./text2.log")
readStream.pipe(writeStream)