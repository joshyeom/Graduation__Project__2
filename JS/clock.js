const toDay = document.querySelector("#day");
const time = document.querySelector("#time");

function getWorldDate(tzOffset) {
  // 24시간제
  var now = new Date();
  var tz = now.getTime() + now.getTimezoneOffset() * 60000 + tzOffset * 3600000;
  now.setTime(tz);

  var s =
    leadingZeros(now.getFullYear(), 4) +
    "  /  " +
    leadingZeros(now.getMonth() + 1, 2) +
    "  /  " +
    leadingZeros(now.getDate(), 2) +
    "     ";
  return s;
}

function getWorldTime(tzOffset) {
  // 24시간제
  var now = new Date();
  var tz = now.getTime() + now.getTimezoneOffset() * 60000 + tzOffset * 3600000;
  now.setTime(tz);

  var s =
    leadingZeros(now.getHours(), 2) + ":" + leadingZeros(now.getMinutes(), 2);

  return s;
}

function leadingZeros(n, digits) {
  var zero = "";
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++) zero += "0";
  }
  return zero + n;
}

toDay.innerText = getWorldDate(+9);
time.innerText = getWorldTime(+9);
