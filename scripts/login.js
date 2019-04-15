function attemptLogin() {
  var form = new FormData(document.getElementById("login-form"));
  var email = form.get("email");
  var password = form.get("password");

  if (credentialsValid(email, password)) {
    logUserIn();
  } else {
    displayAlert("invalid");
  }
}

function credentialsValid(email, password) {
  return (email === "Sincere@april.biz" && password === "hirePierce");
}

function logUserIn() {
  document.cookie = "loggedIn=true";
  document.cookie = "loggedInAlert=show";
  window.location.href = "index.html";
}

$(document).ready(function() {
  $("#login-form").submit(function(e) {
    e.preventDefault();
    attemptLogin();
  });
  if (document.cookie.includes("loggedIn=false")) displayAlert("loggedOut");
});
