let darkTheme = false;

document.getElementById("theme").addEventListener("click", function(){
    console.log('clicked!');
    darkTheme = !darkTheme;
    darkTheme ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme'); 
});


var hostname = window.location.hostname;
document.getElementById('title').innerHTML = hostname  + " > login";



var username = document.login.username;
var password = document.login.password;



document.login.username.focus();

username.placeholder = "Kode Voucher";


function setpass() {
    var user = username.value;
    username.value = user;
    password.value = user;
}


username.onkeyup = setpass;


function voucher() {
    username.focus();
    username.onkeyup = setpass;
    username.placeholder = "Kode Voucher";
    username.style = "border-radius:3px;"
    password.type = "hidden";
}

// change to member mode
function member() {
    username.focus();
    username.onkeyup = "";
    username.placeholder = "Username";
    username.style = "border-radius:3px 3px 0px 0px;"
    password.type = "password";
}


