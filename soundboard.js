var explosion = new Audio("explosion.wav");
var laser = new Audio("laser.wav");
var splash = new Audio("splash.wav");

document.getElementById("btn_explosion").addEventListener("click", function() {explosion.play()});
document.getElementById("hvr_explosion").addEventListener("mouseover", function() {explosion.play()});

document.getElementById("btn_laser").addEventListener("click", function() {laser.play()});
document.getElementById("hvr_laser").addEventListener("mouseover", function() {laser.play()});

document.getElementById("btn_splash").addEventListener("click", function() {splash.play()});
document.getElementById("hvr_splash").addEventListener("mouseover", function() {splash.play()});