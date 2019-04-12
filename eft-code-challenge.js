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
