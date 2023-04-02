const fs = require("fs")
const zlib = require("zlib")

const zlibStream = zlib.createGzip()
const readStream = fs.createReadStream("./big.txt")
const writeStream = fs.createWriteStream("./zlib.txt")
readStream.pipe(zlibStream).pipe(writeStream)