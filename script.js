
var btn_1 =document.getElementById("toggle-btn-1") //register toggle button
var btn_2 =document.getElementById("toggle-btn-2") // login toggle button
var log = document.getElementById ('login') // login form
var reg = document.getElementById('register') // register form

//onclick function for register toggle button

function register() {
    btn_1.style.background ="#6d26f0";
    btn_2.style.background ="transparent";
    reg.style.display = "block";
    log.style.display = "none";
}

//onclick function for login toggle button

function login() {
	btn_1.style.background ="transparent";
    btn_2.style.background ="#3bec05";
    log.style.display = "block";
    reg.style.display = "none";
}