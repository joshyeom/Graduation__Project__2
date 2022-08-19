const toDay = document.querySelector("#day");

function getWorldTime(tzOffset) {
  var now = new Date();
  var tz = now.getTime() + now.getTimezoneOffset() * 60000 + tzOffset * 3600000;
  now.setTime(tz);

  console.log(now.getDate());
}
setInterval(1000, getWorldTime);
