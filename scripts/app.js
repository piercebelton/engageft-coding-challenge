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
    $(logout).appendTo("#login-li");
  } else {
    $(login).appendTo("#login-li");
  }
}

function setNavbarClickFunctions() {
  $("#navbar-title").click(function() {
    alertOrRedirect('index');
  });
  $("#home-link").click(function() {
    alertOrRedirect('index');
  });
  $("#acct-link").click(function() {
    alertOrRedirect('account');
  });
  $("#logout-link").click(function() {
    setLoggedInFalse();
    window.location.href = "login.html";
  });
}

function alertOrRedirect(link) {
  if (userLoggedIn()) {
    window.location.href = `${link}.html`;
  } else {
    $(".alert").hide();
    var alertId = `#${link}-alert`;
    $(alertId).show();
  }
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
