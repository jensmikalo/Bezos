// This app calculates how much money Jeff Bezos made while you undertook various everyday activities.

const bezosSecond = 2489;

var activity = "having this facebook conversation";

function bezosTime(s = 0, m = 0, h = 0, d = 0, w = 0, mo = 0) {
  var a = 1 * s;
  var b = 60 * m;
  var c = 3600 * h;
  var d = 86400 * d;
  var e = 604800 * w;
  var f = 2419300 * mo;
  return a + b + c + d + e + f;
}

Yawning = bezosTime(0, 14);

bezosEarnings = Yawning * bezosSecond;

console.log("While we were " + activity + ", Jeff Bezos made " + bezosEarnings);
