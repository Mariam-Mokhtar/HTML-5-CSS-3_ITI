var x = 0;
var y = 0;
//   canvas part
var can = document.getElementById("can");
var ctx = can.getContext("2d");
ctx.beginPath();
ctx.moveTo(x, y);
ctx.strokeStyle = "red";
console.log(can.width, can.height)
var interval = setInterval(function () {
    if ((x == can.width && y == can.height)) {
        clearInterval(interval);
        alert("Animation End!");
    }
    else {
        x += can.width/4;
        y += can.height/4;
        ctx.clearRect(0, 0, can.width, can.height);
        ctx.lineTo( x, y);
        ctx.stroke();
        console.log(x, y)
    }
}, 500);
ctx.closePath();