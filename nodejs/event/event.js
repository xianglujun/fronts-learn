const EventEmitter = require("events")
const event = new EventEmitter()

// 定义事件监听
event.on("play", (data) => {
    console.log("paly事件被触发了: ", data)
})

event.on("run", (data) => {
    console.log("paly事件被触发了: ", data)
})

event.emit("play", {
    name: "xianglj"
})