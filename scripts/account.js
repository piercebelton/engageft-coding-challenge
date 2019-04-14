function appendUserData() {
  return $.getJSON('https://jsonplaceholder.typicode.com/users/1', function(data) {
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

$(document).ready(function() {
  appendUserData();
  $('#profile-image').click(function() {
    $('#profile-image-upload').click();
  });
});
