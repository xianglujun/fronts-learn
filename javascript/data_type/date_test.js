// 时间对象
function createTime() {
  var time = new Date(2002, 1, 23, 11, 22, 18);
  console.log(time);
}

function get() {
  var time = new Date();
  console.log("year", time.getFullYear());
  console.log("month", time.getMonth());
  console.log("date", time.getDate());
  console.log("hour", time.getHours());
  console.log("minute", time.getMinutes());
  console.log("seconds", time.getSeconds());
  console.log("time", time.getTime());
}

const time_second = 1;
const time_minute = time_second * 60;
const time_hour = time_minute * 60;
const time_day = 24 * time_hour;

// 两个时间差
function duration(start, end) {
  var time1 = start.getTime();
  var time2 = end.getTime();

  var millis = time2 - time1;
  var sub = millis / 1000;

  var day = Math.floor(sub / time_day);
  var hour = Math.floor(sub / time_hour);
  var minute = Math.floor(sub / time_minute);

  return {
    day,
    hour,
    minute,
  };
}
