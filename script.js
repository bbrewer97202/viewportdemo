window.addEventListener("load", getWindowWidth, false);
window.addEventListener("orientationchange", getWindowWidth, false);

function getWindowWidth() {
    var clientWidth = document.body.clientWidth;
    var innerWidth = window.innerWidth;
    var outerWidth = window.outerWidth;        
    debug.innerHTML = "document.body.clientWidth: " + clientWidth + "<br>window.innerWidth: " + innerWidth + "<br>window.outerWidth: " + outerWidth;
}
