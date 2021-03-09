// ---------- SHOW BUTTON LOGIC ----------
function showSE() {
  var hash = window.location.hash.includes('standard-edition');
  if (hash) {
    const profilePicture = document.getElementById('submitSE')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showSE()

function showUE() {
  var hash = window.location.hash.includes('ultimate-edition');
  if (hash) {
    const profilePicture = document.getElementById('submitUE')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showUE()

function showCE() {
  var hash = window.location.hash.includes('champions-edition');
  if (hash) {
    const profilePicture = document.getElementById('submitCE')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showCE()

function showEAPM() {
  var hash = window.location.hash.includes('eapm');
  if (hash) {
    const profilePicture = document.getElementById('submitEAPM')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPM()

function showEAPA() {
  var hash = window.location.hash.includes('eapa');
  if (hash) {
    const profilePicture = document.getElementById('submitEAPA')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPA()

function showEAPPM() {
  var hash = window.location.hash.includes('eappm');
  if (hash) {
    const profilePicture = document.getElementById('submitEAPPM')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPPM()

function showEAPPA() {
  var hash = window.location.hash.includes('eappa');
  if (hash) {
    const profilePicture = document.getElementById('submitEAPPA')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPPA()

// ---------- BUTTON LOCATION LOGIC ----------
// Standard Edition
$(document).ready(function () {
  $('#username').focus();

  $('#submitSE').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html#showAvatar#standard-edition"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});

// Champions Edition
$(document).ready(function () {
  $('#username').focus();

  $('#submitCE').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html#showAvatar#champions-edition"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});

// Ultimate Edition
$(document).ready(function () {
  $('#username').focus();

  $('#submitUE').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html#showAvatar#ultimate-edition"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});

// EA Play - Monthly
$(document).ready(function () {
  $('#username').focus();

  $('#submitEAPM').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html#showAvatar#eapm"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});

// EA Play - Annual
$(document).ready(function () {
  $('#username').focus();

  $('#submitEAPA').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html#showAvatar#eapa"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});

// EA Play Pro - Annual
$(document).ready(function () {
  $('#username').focus();

  $('#submitEAPPA').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html#showAvatar#eappa"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});

// EA Play Pro - Monthly
$(document).ready(function () {
  $('#username').focus();

  $('#submitEAPPM').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      window.location = "checkout.html#showAvatar#eappm"; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});


$(document).ready(function () {
  $('#username').focus();

  $('#submit2').click(function () {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'user'; // User validate
    var ValidPassword = $('#password').val() === 'test123!'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
      $('.valid').css('display', 'block');
      const newLocal = "buy.html#hidelogin";
      window.location = newLocal; // go to home.html
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
 
});