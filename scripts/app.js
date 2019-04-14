function insertNavbar() {
  var navBar = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark"><div class="navbar-header pull-left"><a id="navbar-title">Navbar</a></div><ul class="navbar-nav"><li class="nav-item"><a id="home-link" class="nav-link">Home</a></li><li id="acct-li" class="nav-item"><a id="acct-link" class="nav-link">Account</a></li></ul></nav>';
  $(navBar).insertAfter(".nav-container");
}


function insertLoginLogoutLink() {
  var login = '<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>';
  var logout = '<li class="nav-item"><a id="logout-link" class="nav-link">Logout</a></li>';
  if (userLoggedIn()) {
    $(logout).insertAfter("#acct-li");
  } else {
    $(login).insertAfter("#acct-li");
  }
}


function redirectIfLoggedIn(link) {
  if (userLoggedIn()) {
    window.location.href = "./" + link + ".html";
  } else {
    window.location.href = "./login.html";
  }
}


function userLoggedIn() {
  var loggedInCookie = "email=Sincere@april.biz";
  var cookieArray = document.cookie.split(";");
  for(var i = 0; i < cookieArray.length; i++) {
    if (cookieArray[i].trim() === loggedInCookie) {
      return true;
    }
  }
  return false;
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
