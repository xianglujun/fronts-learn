const fs = require('fs')
const mime = require('mime')
const route = {
    '/login': (res) => {
        res.writeHead(200, { "Content-Type": mime.getType('html') })
        res.write(fs.readFileSync('./static/login.html', {
            encoding: "utf-8"
        }))
    },
    '/index': (res) => {
        res.writeHead(200, { "Content-Type": mime.getType('html') })
        res.write(fs.readFileSync('./static/index.html', {
            encoding: "utf-8"
        }))
    },
    '/404': (res) => {
        res.writeHead(200, { "Content-Type": mime.getType('html') })
        res.write(fs.readFileSync('./static/404.html', {
            encoding: "utf-8"
        }))
    },
}

module.exports = route