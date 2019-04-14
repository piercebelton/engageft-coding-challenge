function insertNavbar() {
  var navBar = ''
  $.get("../views/navbar.html", function(html_string) {
    navBar = html_string;
    $(navBar).insertAfter(".nav-container");
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
});
