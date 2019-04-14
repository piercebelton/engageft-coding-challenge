function attemptLogin() {
  var form = new FormData(document.getElementById("login-form"));
  var email = form.get("email");
  var password = form.get("password");

  if (credentialsValid(email, password)) {
    setLoggedInCookie(email);
    window.location.href = "./index.html";
  } else {
    $("#login-alert").hide();
    $("#invalid-alert").show();
  }
}


function credentialsValid(email, password) {
  return (email === "Sincere@april.biz" && password === "hirePierce");
}


function setLoggedInCookie(email) {
  document.cookie = "email=" + email;
}


$(document).ready(function() {
  $("#invalid-alert").hide();
  $("#login-button").click(function() {
    attemptLogin();
  });
});
