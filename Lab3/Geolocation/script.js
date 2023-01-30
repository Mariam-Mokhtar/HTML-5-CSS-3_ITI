var loc_btn = document.getElementById("loc");
loc_btn.onclick = function () {
    navigator.geolocation.getCurrentPosition(showLoc, showErr, options)
};
function showLoc(e) {
    var long = e.coords.longitude;
    var lat = e.coords.latitude;
    location.assign("http://maps.google.com/maps?q" +lat + ",+" + long);
}
function showErr(e) {
    var error = e.code
    switch (error) {
        case 0:
            console.log("Error Message: ", e.message);
            break;
        case 1:
            console.log("Error Message: ", e.message);
            break;
        case 2:
            console.log("Error Message: ", e.message);
            break;
        case 3:
            console.log("Error Message: ", e.message);
            break;
        default:
            break;
    }
}
var options = {
//timeout:0
}