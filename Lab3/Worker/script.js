var sum = document.getElementById("sum");
var bg = document.getElementById("background");
var worker = new Worker("worker.js");

sum.onclick = function () {
    // var sum=0;
    // for (let i=0;i<10000000000;i++)
    // {sum+=i;}
    // alert(sum);
    worker.postMessage("");
}
worker.onmessage = function (message) {
    alert(message.data);
}

bg.onclick = function () {
    if (document.body.style.background !== "rgb(232, 218, 239)") {
        document.body.style.background = "rgb(232, 218, 239)";
    } else {
        document.body.style.background = "rgb(254, 245, 231)";
    }
}