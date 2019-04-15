function insertUserData() {
  $.getJSON('https://jsonplaceholder.typicode.com/users/1', function(data) {
    $("#full-name").html(data.name);
    $("#company-name").html(data.company.name);
    $("#company-catchphrase").html(data.company.catchPhrase);
    $("#company-bs").html(data.company.bs);
    $("#username").html(data.username);
    $("#email").html(data.email);
    $("#phone").html(data.phone);
    $("#website").html(data.website);
    $("#street").html(data.address.street);
    $("#suite").html(data.address.suite);
    $("#city").html(data.address.city);
    $("#zip").html(data.address.zipcode);
  });
}

$(document).ready(function() {
  if (!userLoggedIn()) window.location.href = "login.html";
  insertUserData();
  $('#profile-image').click(function() {
    $('#profile-image-upload').click();
  });
});
