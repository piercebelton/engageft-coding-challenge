function insertNavbar() {
  $.get("navbar.html", function(html_string) {
    $(".nav-container").html(html_string);
    insertLoginLogoutLink();
    setNavbarClickFunctions();
   },'html');
}

function insertLoginLogoutLink() {
  var login = '<a class="nav-link" href="login.html">Login</a>';
  var logout = '<a id="logout-link" class="nav-link">Logout</a>';
  if (userLoggedIn()) {
    $("#login-li").html(logout);
  } else {
    $("#login-li").html(login);
  }
}

function setNavbarClickFunctions() {
  $("#home-link").click(function() {
    redirectOrAlert('index', 'home');
  });
  $("#acct-link").click(function() {
    redirectOrAlert('account', 'account');
  });
  $("#logout-link").click(function() {
    setLoggedInFalse();
    window.location.href = "login.html";
  });
}

function redirectOrAlert(link, alert) {
  if (userLoggedIn()) {
    window.location.href = `${link}.html`;
  } else {
    displayAlert(alert);
  }
}

function displayAlert(alert) {
  clearAlert();
  switch(alert) {
  case "home":
    $("#login-alert").addClass("alert-danger");
    $("#login-alert").html("Please login to access the Home page.");
    break;
  case "account":
    $("#login-alert").addClass("alert-danger");
    $("#login-alert").html("Please login to access the Account page.");
    break;
  case "invalid":
    $("#login-alert").addClass("alert-danger");
    $("#login-alert").html("Login failed. Email or password is incorrect.");
    break;
  case "loggedOut":
    $("#login-alert").addClass("alert-info");
    $("#login-alert").html("You are logged out.");
    break;
  }
}

function clearAlert() {
  $("#login-alert").removeClass("alert-danger alert-info");
  $("#login-alert").empty();
}

function userLoggedIn() {
  var loggedInCookie = "loggedIn=true";
  return document.cookie.includes(loggedInCookie);
}

function setLoggedInFalse() {
  document.cookie = "loggedIn=false";
}

$(document).ready(function() {
  insertNavbar();
});
