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
