// video part
var vid = document.getElementById("vid");
var vidDuration = document.getElementById("duration");
var duration_end = document.getElementById("duration_end");
var duration_start = document.getElementById("duration_start");
var speedBar = document.getElementById("speed");
console.log(vid);
var duration;

vid.onloadedmetadata = function () {
    // get full duration
    duration = this.duration;
    console.log(duration);
    // set max of range duration element
    vidDuration.max = duration;
    // set max duration 0:00/0:00
    var minutes = Math.floor(duration / 60);
    if(minutes<10)
    minutes="0"+minutes;
    var sec = Math.trunc(duration - (minutes) * 60);
    if(sec<10)
    {sec="0"+sec;}
    duration_end.innerHTML = `${minutes}:${sec}`;
};

// while video palyed change time and bar 
vid.ontimeupdate = function () {
    minutes = Math.floor(vid.currentTime / 60);
    if(minutes<10)
    minutes="0"+minutes;
    sec = Math.trunc(vid.currentTime - (minutes) * 60);
    if(sec<10)
    {sec="0"+sec;}
    duration_start.innerHTML = `${minutes}:${sec}`;
    vidDuration.value = vid.currentTime;
}
//play
document.getElementById("play").onclick = (e => {
    vid.play();
});
// stop
document.getElementById("stop").onclick = (e => {
    vid.pause();
});
//start button
document.getElementById("start").onclick = (e => {
    vid.currentTime = 0;
});
document.getElementById("skipForward").onclick = (e => {
    vid.currentTime += 5;
});
document.getElementById("skipBackward").onclick = (e => {
    vid.currentTime -= 5;
});
//end button
document.getElementById("end").onclick = (e => {
    vid.currentTime = duration - 0.1;
});

// mute handler
document.getElementById("mute").onclick = (e => {
    vid.volume = 0;
    document.getElementById("volume").value = 0;
});

document.getElementById("fullScreen").onclick = (e => {
    vid.requestFullscreen();
});

// change volume
document.getElementById("volume").onchange = (e => {
    vid.volume = e.target.value;
});

//change of video duration bar 
vidDuration.onchange=(e => {
    vid.currentTime = e.target.value;
});

// change speed
speedBar.onchange = function () {
    vid.playbackRate = speedBar.value;
    vidDuration.value = vid.currentTime;
}
