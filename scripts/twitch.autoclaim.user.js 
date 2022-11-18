// ==UserScript==
// @namespace     McZlik
// @name          Twitch.tv auto-claim
// @description   Automatically claim channel point bonus (green button), checks every 5 seconds
// @include       *://*.twitch.tv/*
// @icon          https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png
// @version       1.0.0
// @grant         none
// ==/UserScript==
    
// Check for the existence of the bonus icon every x ms, and click it
setInterval(function(){
  const buttons = document.getElementsByClassName("claimable-bonus__icon");
  for (let b of buttons) {
    b.click();
  }
}, 5000);