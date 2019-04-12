function attemptLogin(){
  var form = new FormData(document.getElementById("login-form"));
  var email = form.get("email");
  var password = form.get("password");

  if (credentialsValid(email, password)) {
    setLoggedInCookie(email);
    window.location.href = "./home.html";
    return false;
    //^^need to return false else form reloads 'index'
  } else {
    return console.log("bad creds, placeholder for flash message");
  }
}


function credentialsValid(email, password){
  return (email === "Sincere@april.biz" && password === "hirePierce" ? true : false);
}


function setLoggedInCookie(email){
  document.cookie = "email=" + email;
}


function redirectIfLoggedIn(link){
  if (getCookie("email") === "Sincere@april.biz"){
    window.location.href = "./" + link + ".html";
  } else {
    window.location.href = "./index.html";
  }
}


function getCookie(cookieName) {
  var name = cookieName + "=";
  var cookieArray = document.cookie.split(";");
  for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}


function insertNavbar(){
  var navBar = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark"><div class="navbar-header pull-left"><a id="navbar-title" href="index.html">Navbar</a></div><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="./index.html" onclick="redirectIfLoggedIn(\'home\'); return false;">Home</a></li><li class="nav-item"><a class="nav-link" href="./index.html" onclick="redirectIfLoggedIn(\'account\'); return false;">Account</a></li><li class="nav-item"><a class="nav-link" href="#">Login</a></li></ul>'
  $(navBar).insertAfter(".nav-container");
}


$( document ).ready(function() {
    insertNavbar();
});
