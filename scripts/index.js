$(document).ready(function() {
  if (!userLoggedIn()) window.location.href = "login.html";
  if (!document.cookie.includes("loggedInAlert=show")) $(".alert").hide();
  document.cookie = "loggedInAlert=hide";
});
