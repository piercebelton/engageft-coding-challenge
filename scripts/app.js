function insertNavbar() {
  var navBar = '';
  $.get("../views/navbar.html", function(html_string) {
    navBar = html_string;
    $(navBar).appendTo(".nav-container");
    insertLoginLogoutLink();
    setNavbarClickFunctions();
   },'html');
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
    window.location.href = "./login.html";
  });
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


function alertOrRedirect(link) {
  if (userLoggedIn()) {
    window.location.href = "./" + link + ".html";
  } else {
    $(".alert").hide();
    var alertId = "#" + link + "-alert";
    $(alertId).show();
  }
}


function userLoggedIn() {
  var loggedInCookie = "loggedIn=true";
  var cookieArray = document.cookie.split(";");
  for(var i = 0; i < cookieArray.length; i++) {
    if (cookieArray[i].trim() === loggedInCookie) {
      return true;
    }
  }
  return false;
}


function setLoggedInFalse() {
  document.cookie = "loggedIn=false";
}


$(document).ready(function() {
  insertNavbar();
});
