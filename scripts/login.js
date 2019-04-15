function attemptLogin() {
  var form = new FormData(document.getElementById("login-form"));
  var email = form.get("email");
  var password = form.get("password");

  if (credentialsValid(email, password)) {
    setLoggedInCookie();
    window.location.href = "index.html";
  } else {
    displayAlert("invalid");
  }
}

function credentialsValid(email, password) {
  return (email === "Sincere@april.biz" && password === "hirePierce");
}

function setLoggedInCookie() {
  document.cookie = "loggedIn=true";
}

function userLoggedOut() {
  var loggedOutCookie = "loggedIn=false";
  return document.cookie.includes(loggedOutCookie);
}

$(document).ready(function() {
  $("#login-form").submit(function(e) {
    e.preventDefault();
    attemptLogin();
  });
  if (document.cookie.includes("loggedIn=false")) displayAlert("loggedOut");
});
