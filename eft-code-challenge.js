function attemptLogin(){
  var form = new FormData(document.getElementById("login-form"));
  var email = form.get("email");
  var password = form.get("password");

  if (credentialsValid(email, password)) {
    setLoggedInCookie(email);
    window.location.href = "./home.html";
  } else {
    $("#login-alert").hide();
    $("#invalid-alert").show();
  }
}


function credentialsValid(email, password){
  return (email === "Sincere@april.biz" && password === "hirePierce");
}


function setLoggedInCookie(email){
  document.cookie = "email=" + email;
}


function deleteLoggedInCookie(){
  document.cookie = "email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
}


function redirectIfLoggedIn(link){
  if (getCookie("email") === "Sincere@april.biz"){
    window.location.href = "./" + link + ".html";
  } else {
    window.location.href = "./index.html";
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


function insertNavbar(){
  var navBar = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark"><div class="navbar-header pull-left"><a id="navbar-title">Navbar</a></div><ul class="navbar-nav"><li class="nav-item"><a id="home-link" class="nav-link">Home</a></li><li id="acct-li" class="nav-item"><a id="acct-link" class="nav-link">Account</a></li></ul></nav>';
  $(navBar).insertAfter(".nav-container");
}


function insertLoginLogoutLink(){
  var login = '<li class="nav-item"><a class="nav-link" href="index.html">Login</a></li>';
  var logout = '<li class="nav-item"><a id="logout-link" class="nav-link">Logout</a></li>';
  if (getCookie("email") === "Sincere@april.biz"){
    $(logout).insertAfter("#acct-li");
  } else {
    $(login).insertAfter("#acct-li");
  }
}


function appendUserData(){
  return $.getJSON('https://jsonplaceholder.typicode.com/users/1', function(data){
    $("#full-name").append(data.name);
    $("#company-name").append(data.company.name);
    $("#company-catchphrase").append(data.company.catchPhrase);
    $("#company-bs").append(data.company.bs);
    $("#username").append(data.username);
    $("#email").append(data.email);
    $("#phone").append(data.phone);
    $("#website").append(data.website);
    $("#street").append(data.address.street);
    $("#suite").append(data.address.suite);
    $("#city").append(data.address.city);
    $("#zip").append(data.address.zipcode);
  });
}


$( document ).ready(function() {
    insertNavbar();
    insertLoginLogoutLink();
    $("#invalid-alert").hide();
    appendUserData();

    $("#navbar-title").click(function(){
      redirectIfLoggedIn('home');
    });
    $("#home-link").click(function(){
      redirectIfLoggedIn('home');
    });
    $("#acct-link").click(function(){
      redirectIfLoggedIn('account');
    });
    $("#login-button").click(function(){
      attemptLogin();
    });
    $("#logout-link").click(function(){
      deleteLoggedInCookie();
      window.location.href = "./index.html";
    });
    $('#profile-image').click(function() {
      $('#profile-image-upload').click();
    });
});
