// ==UserScript==
// @namespace     McZlik
// @name          Youtube - Theater mode
// @description   Ensure YouTube is set to theater mode
// @include       *://*.youtube.com/*
// @icon          https://www.youtube.com/s/desktop/52707237/img/favicon_32x32.png
// @version       1.0.0
// @grant         none
// ==/UserScript==

const fun = function (ajaxOpen) {

    // ================
    //   Theater mode
    // ================
    function theaterMode() {
        const theater = (document.getElementsByClassName("ytp-size-button") || [])[0];
        if (theater && theater.title.indexOf("heater") !== -1) {
            theater.click();
        }

        const watch = document.getElementById("page");
        if (watch && watch.classList.contains("watch")) {
            watch.classList.remove("watch-non-stage-mode");
            watch.classList.add("watch-stage-mode");
            watch.classList.add("watch-wide");
        }
    }

    window.addEventListener("yt-navigate-finish", theaterMode);
    theaterMode();
}

window.addEventListener("yt-navigate-finish", function () {
    const node = document.createElement('script');
    node.type = "text/javascript";
    node.textContent = '(' + fun.toString() + ')(XMLHttpRequest.prototype.open)';
    document.body.appendChild(node);
}, { once: true });