function insertNavbar() {
  var navBar = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark"><div class="navbar-header pull-left"><a id="navbar-title">Navbar</a></div><ul class="navbar-nav"><li class="nav-item"><a id="home-link" class="nav-link">Home</a></li><li id="acct-li" class="nav-item"><a id="acct-link" class="nav-link">Account</a></li></ul></nav>';
  $(navBar).insertAfter(".nav-container");
}


function insertLoginLogoutLink() {
  var login = '<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>';
  var logout = '<li class="nav-item"><a id="logout-link" class="nav-link">Logout</a></li>';
  if (getCookie("email") === "Sincere@april.biz") {
    $(logout).insertAfter("#acct-li");
  } else {
    $(login).insertAfter("#acct-li");
  }
}


function redirectIfLoggedIn(link) {
  if (getCookie("email") === "Sincere@april.biz") {
    window.location.href = "./" + link + ".html";
  } else {
    window.location.href = "./login.html";
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


function deleteLoggedInCookie() {
  document.cookie = "email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}


$(document).ready(function() {
  insertNavbar();
  insertLoginLogoutLink();
  $("#navbar-title").click(function() {
    redirectIfLoggedIn('index');
  });
  $("#home-link").click(function() {
    redirectIfLoggedIn('index');
  });
  $("#acct-link").click(function() {
    redirectIfLoggedIn('account');
  });
  $("#logout-link").click(function() {
    deleteLoggedInCookie();
    window.location.href = "./login.html";
  });
});
