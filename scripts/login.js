function attemptLogin() {
  var form = new FormData(document.getElementById("login-form"));
  var email = form.get("email");
  var password = form.get("password");

  if (credentialsValid(email, password)) {
    setLoggedInCookie();
    window.location.href = "./index.html";
  } else {
    $(".alert").hide();
    $("#invalid-alert").show();
  }
}


function credentialsValid(email, password) {
  return (email === "Sincere@april.biz" && password === "hirePierce");
}


function setLoggedInCookie() {
  document.cookie = "loggedIn=true";
}


$(document).ready(function() {
  $("#index-alert").hide();
  $("#account-alert").hide();
  $("#invalid-alert").hide();
  $("logout-alert").hide();
  $("#login-button").click(function() {
    attemptLogin();
  });
  if (!userLoggedIn()) {
    $("logout-alert").show();
  }
});
