var red=document.getElementById("red");
var green=document.getElementById("green");
var blue=document.getElementById("blue");
var sent_ence=document.getElementById("sentence");


red.onchange = function () {
    sent_ence.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    console.log(red.value, green.value, blue.value);
}
green.onchange=function(){
    sent_ence.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;

}
blue.onchange=function(){
    sent_ence.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}