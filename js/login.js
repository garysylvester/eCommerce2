$(document).ready(function () {
  //$('#username').focus();

  $('#submit').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'usertester'; // User validate
    var ValidPassword = $('#password').val() === 'abctest123'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});


$(document).ready(function () {
  //$('#username').focus();

  $('#submit2').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'usertester'; // User validate
    var ValidPassword = $('#password').val() === 'abctest123'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      const newLocal = "buy.html#hidelogin";
      window.location = newLocal; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
 
});